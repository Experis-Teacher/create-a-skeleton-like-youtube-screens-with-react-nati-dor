import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import './SkeletonCard.css'

const SkeletonCard = (props) => {
    const arr =[1];
    return (
        <div>
            <SkeletonTheme color="grey" highlightColor="#444">
            <h2><Skeleton height={32} width={200}/></h2>
            {
          arr.map(() => {
            return (
         <div className="card">
        <Skeleton height={172} width={306}/>
        <Skeleton circle height={40} width={40}/>
        <Skeleton height={42} width={306}/>
        <Skeleton height={18} width={306}/>
        <div className="myDiv">
        <Skeleton height={21} width={150}/>•<Skeleton height={21} width={150}/>
        </div>
         </div>
         

            );
            })}
            
            </SkeletonTheme>       
            {/* <SkeletonTheme color="grey" highlightColor="#444">
            <p>
                <Skeleton height={250} width={300} count={1} />
            </p>

            </SkeletonTheme>
            <SkeletonTheme color="#990" highlightColor="#550">
            <p>
                <Skeleton height={250} width={300} count={1} />
            </p>

            </SkeletonTheme> */}
        </div>
    )
}

export default SkeletonCard
