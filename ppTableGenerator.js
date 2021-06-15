const W = 6
const H = 12
const KIND_OF_PANEL = 5
const RANGE_OF_MESH = 6

const getRandomInt = (max) =>{
  return Math.floor(Math.random() * max);
}

const lineFormat = (hoge) => {
  for(let i= 0; i <hoge.length ; i++){
    hoge[i] = getRandomInt(5)
    while(i > 0 && hoge[i-1] == hoge[i]){
        hoge[i] = getRandomInt(KIND_OF_PANEL)
    }
  }
  const formatted = hoge
  return formatted
}

const generatePanelLine = () =>{
  let  lineData = new Array(6).fill(0)
  lineData = lineFormat(lineData)
  const line = lineData
  return line
}

const addPanelLine = (line,row) => {
  const rowNum = row
  // console.log(rowNum)
  let lines = line
  let newLine = generatePanelLine()
  for(let i = 0; i < W ; i++){
    if(rowNum < RANGE_OF_MESH){//最初の6列に対しては、全部隣り合っちゃダメ
      if(i == 0){//上下で同じものがあったら再抽選,左端だけ
        while(lines[lines.length-1][i] == newLine[i]){ 
          newLine[i] = getRandomInt(KIND_OF_PANEL)
        }
      }else{//上下左右で隣り合ったら再抽選  
        while(i > 0 && (lines[lines.length-1][i] == newLine[i] || newLine[i-1] == newLine[i])){ 
          newLine[i] = getRandomInt(KIND_OF_PANEL)
        }
      }
    }else{  //----ここからは RANGE_OF_MESH以降の列-------
      if(i == 0){//上下で同じものがあったら再抽選,左端だけ
        while(lines[lines.length-1][i] == newLine[i]){ 
          newLine[i] = getRandomInt(KIND_OF_PANEL)
        }
      }else{//上下で隣り合ったら再抽選  横は2個までok
        while(i > 0 && (lines[lines.length-1][i] == newLine[i] || newLine[i-2] == newLine[i-1] && newLine[i-1] == newLine[i])){ 
          newLine[i] = getRandomInt(KIND_OF_PANEL)
        }
      }
    }
  }
  lines.push(newLine)
  return lines
}

const generatePaneponTable = () => {
  let table = []
  const initialLine = generatePanelLine()
  table.push(initialLine)
  for(let i = 0 ; i<H-1; i++){
    table = addPanelLine(table, i)
  }
  
  return table
}

console.log(generatePaneponTable())