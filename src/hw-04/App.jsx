import { useEffect, useState } from "react";
import css from "./App.module.css";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { Loader } from "./components/Loader/Loader";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { ImageModal } from "./components/ImageModal/ImageModal";
import { UnsplashApi } from "./api/unsplash";

const scrollToBottom = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(scrollBy(0, document.body.scrollHeight, { behavior: "smooth" }));
    }, 0);
  });

const Spacer = ({ width = 0, height = 0 }) => <div style={{ width, height }} />;

export const Homework_04 = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [modalImage, setModalImage] = useState("");

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setImages([]);
  }, [query]);

  useEffect(() => {
    if (!query) return;

    (async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const imgs = await UnsplashApi.getImages(query, page);
        setImages((p) => [...p, ...imgs]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })().then(scrollToBottom);
  }, [query, page]);

  const search = (query) => {
    setQuery(query);
    setPage(1);
  };

  const loadMore = () => setPage((p) => p + 1);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage("");
  };

  const isLoadMoreBtnShown = images.length !== 0 && !isLoading;

  return (
    <main className={css.app}>
      <SearchBar onSubmit={search} />

      {isError ? (
        <ErrorMessage />
      ) : (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {isLoadMoreBtnShown ? (
        <LoadMoreBtn onClick={loadMore} />
      ) : (
        <Spacer height="90px" />
      )}

      {isLoading ? <Loader /> : <Spacer height="200px" />}

      <ImageModal src={modalImage} close={closeModal} />
    </main>
  );
};
