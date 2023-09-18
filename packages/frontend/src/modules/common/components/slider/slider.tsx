/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-cycle */
import React, { useState, useMemo, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  StyledSliderWrapper,
  StyledSliderBtn,
  StyledSliderBtnBack,
  StyledBtnSliderWrapper
} from './slider.styled';
import { EmptyText } from '../empty/empty.text';
import { TodoCard } from '../slider-todo-card';
import { APP_KEYS } from '../../consts';

import 'swiper/css';
import 'swiper/css/pagination';

import { useGetAllTodos } from '../../../hooks/use.mutation.hooks';

export const SliderList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  const currentURL = location.search;
  const page = searchParams.get('page');
  const currentPage = page ? parseInt(page, 10) : 1;
  const search = searchParams.get('search');
  const status = searchParams.get('status');
  const [pages, setPages] = useState<number | undefined>();
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isGetBack, setIsGetBack] = useState(false);

  const searchQueryKey =
    APP_KEYS.QUERY_KEYS.TODOS +
    (status ? `?&status=${status}` : '') +
    (search ? `?&search=${search}` : '');

  const {
    query: { data, isLoading }
  } = useGetAllTodos(APP_KEYS.QUERY_KEYS.TODOS + currentURL);

  const handleSlideChange = (swiper: any) => {
    if (swiper.isEnd && currentPage !== pages) {
      setIsLastSlide(true);
    } else {
      setIsLastSlide(false);
    }
    if (swiper.isBeginning && currentPage > 1) {
      setIsGetBack(true);
    } else {
      setIsGetBack(false);
    }
  };

  useEffect(() => {
    if (!isLoading && data) {
      const amountOfPages = Math.ceil(data.data.totalCount / 6);
      setPages(amountOfPages);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (currentPage === pages) {
      setIsLastSlide(false);
    }

    if (currentPage === 1) {
      setIsGetBack(false);
    }
  }, [currentPage, pages]);

  const params = useMemo(() => {
    return Object.fromEntries([...searchParams]);
  }, [searchParams]);

  const loadMore = () => {
    const nextPage = currentPage + 1;
    setSearchParams({ ...params, page: nextPage.toString() });
  };

  const backPage = () => {
    const prevPage = currentPage - 1;
    setSearchParams({ ...params, page: prevPage.toString() });
  };

  return (
    <>
      {!isLoading && data && data.data.data.length === 0 && <EmptyText />}
      <StyledSliderWrapper>
        <Swiper
          style={{
            left: 0,
            width: '100%'
          }}
          slidesPerView={2}
          spaceBetween={15}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper"
          onSlideChange={(swiper) => {
            handleSlideChange(swiper);
          }}
          onUpdate={(swiper) => {
            if (swiper.activeIndex !== 0 && currentPage > 1) {
              swiper.slideTo(0);
            }
            if (swiper.activeIndex === 0 && currentPage !== 1) {
              setIsGetBack(true);
            }
          }}
        >
          {!isLoading &&
            data &&
            data?.data.data.map((el) => {
              return (
                <SwiperSlide key={el.id}>
                  <TodoCard data={el} />
                </SwiperSlide>
              );
            })}
        </Swiper>

        {isLastSlide && (
          <StyledBtnSliderWrapper>
            <StyledSliderBtn type="button" onClick={loadMore} className="load-more-button">
              Load More
            </StyledSliderBtn>
          </StyledBtnSliderWrapper>
        )}
        {isGetBack && (
          <StyledSliderBtnBack type="button" onClick={backPage} className="load-more-button">
            prev slides
          </StyledSliderBtnBack>
        )}
      </StyledSliderWrapper>
    </>
  );
};
