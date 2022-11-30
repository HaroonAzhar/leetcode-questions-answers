/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
 var duplicateZeros = function(arr) {
    occurences = 0
    limit = arr.length
    lastIndex =  -1
    while(occurences < limit){
        lastIndex  +=1
        curr= arr[lastIndex]
        curr === 0 ? occurences += 2 : occurences += 1
        
    }
    to = arr.length - 1
    from = lastIndex
    // console.log('arr = ', arr)
    while (from >= 0){
     // console.log(`to ${to}`)
     // console.log(`from ${from}`)
        curr =  arr[from] 
        if (curr  !== 0  ){
            //swap non zero
            // console.log('arr = ', arr)
            arr[to] = arr[from]
            to -= 1 
            from -= 1
            
            }else {
                // console.log('is  last= ',from === lastIndex)
              if(from === lastIndex  && (occurences > limit)  ){
                  if (occurences !== arr.length)
                  arr[to] = arr[from]
                  to -= 1 
                  from -= 1
                  continue  
              }
                  // console.log('1arr = ', arr)
                  arr[to] = arr[from]
                  to -= 1 
                  // console.log('2arr = ', arr)
                  arr[to] = arr[from]
                  from -= 1
                  to -= 1 
                  // console.log('3   /arr = ', arr)
                  
             
                
              
                
            }
    }
  return arr
    
};