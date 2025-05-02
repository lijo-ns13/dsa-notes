const adjacencyList={
    'A':['B','F'],
    'B':['A','F','C'],
    'C':['B','E','D'],
    'D':['C','E'],
    'E':['D','C','F'],
    'F':['A','B','E']
}
console.log(adjacencyList)


const travBFS=function(graph,start){
    const output=[];
    const visited={};
    const queue=[start];
    visited[start]=true;
    let current;
    
    while(queue.length>0){
        current=queue.shift();
        output.push(current);
        const neighbours=graph[current];
        for(let i=0;i<neighbours.length;i++){
            const neighbour=neighbours[i];
            if(!visited[neighbour]){
                queue.push(neighbour);
                visited[neighbour]=true;
            }
        }
    }
    return output;
}
console.log(travBFS(adjacencyList,'A'))