import React,{useState,useEffect} from 'react';
import axios from 'axios';
import uuid from 'uuid';
import moment from 'moment';
import '../styles/Home.css';

const Home = ()=>{

    const [state,setState] = useState([]);

    useEffect(()=>{
        const fetchData =async ()=>{
            const response = await axios.get('https://movie-mb-api.herokuapp.com/home/trending');
            setState(response.data.results);
        }
        fetchData();
    },[])

    const renderMovieList = () =>{
        const movieThumnailDoamin = 'https://image.tmdb.org/t/p/w500';
        return(
            <div className='row'>
            <div className='card-deck '>
                {state.map((idx)=>    
                    <div className='col-4 mb-3' key={uuid()}>
                        <div className="card hvr-float ">                 
                            <img className="card-img-top" src={`${movieThumnailDoamin}${idx.poster_path}`} alt={idx.title}/>                     
                                <div className="card-body">                               
                                        <h5 className="card-title">{idx.title}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>                               
                                </div>
                                
                                <div className="card-footer " style={{backgroundColor:'white'}}>                                   
                                        <small className="text-muted">On cinema {moment(idx.release_date).format('LL')}</small>
                                </div>                            
                        </div>
                    </div>     
                    
                        )}                    
            </div>
            </div>
        )                    
    }

    return(
        <div className='container mt-5'>
            {renderMovieList()}
        </div>
    );
}
export default Home;