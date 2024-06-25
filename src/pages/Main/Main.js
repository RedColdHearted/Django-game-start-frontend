import './Main.css';
import Imgs from'../../componets/SecImg/Imgs';
import Pagination from '../../componets/SecImg/Pagination';
import News from'../../componets/news/News';
import Compilations from'../../componets/Compilations/Compilations';
import Blogs from'../Blogs/Blogs';
import BlogsA from'../Blogs/BlogsA';
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';

function Main() {
  const [index, setIndex] = useState(0);
  const [isNews, setIsNews] = useState(true);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
        <Carousel controls={false} activeIndex={index} onSelect={handleSelect} interval={2000} indicators={false}>
          <Carousel.Item>
              <Imgs index={index} handleSelect={handleSelect}/>
          </Carousel.Item>
          <Carousel.Item>
            <Imgs index={index} handleSelect={handleSelect}/>
          </Carousel.Item>
          <Carousel.Item>
            <Imgs index={index} handleSelect={handleSelect}/>
          </Carousel.Item>
        </Carousel>
          <Pagination index={index} handleSelect={handleSelect}/>
        <section className='sec'>
          <h3>Всё про видео игры</h3> 
          <Compilations setIsNews={setIsNews}/>
          <section>
            { isNews ? <News/>:<BlogsA/> }
            <Blogs/>
          </section>
        </section>
    </>
  );
}
export default Main;