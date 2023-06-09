import { useState } from 'react';
import './styles.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MovieRow = ({ title, items }) => {
    // console.log(items);
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        //it is the scroll more the width of screen and half for two
        let x = scrollX + Math.round(window.innerWidth / 2);
        //when arrives in 0 the scroll stops
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    };

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 230
        if ((window.innerWidth - listW) > x) {
            //60 is because  the each side has a padding of 30 px 
            x = (window.innerWidth - listW) - 60;
        }
        setScrollX(x);
    };

    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--left' onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className='movieRow--right' onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 230,
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='movieRow--item' >
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>

                    ))}
                </div>

            </div>
        </div >
    )
}

export default MovieRow;