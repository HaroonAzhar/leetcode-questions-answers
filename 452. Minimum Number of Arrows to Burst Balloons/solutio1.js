/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=>a[0]-b[0]) 
   let fired = 1;
   let rangeSoFar  =  points[0][1];   
   points.forEach((range)=>{
       if(rangeSoFar < range[0]  ){
           fired++
           rangeSoFar = range[1]
        }else{
            rangeSoFar = Math.min(rangeSoFar,range[1] );
        }

           
       


   })  
   return fired 
};