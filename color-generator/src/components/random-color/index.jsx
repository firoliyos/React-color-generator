import {useState, useEffect}  from 'react'
export default function() {

  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000')

  function randomColor(length){
   return Math.floor(Math.random() * length)
  }

  function handleHexColor(){
    let hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = '#'
    for(let i=0; i<6; i++){
      hexColor += hex[randomColor(hex.length)]
    }
      setColor(hexColor)
  }
  function handleRgbColor(){
    let r = randomColor(255)
    let g = randomColor(255)
    let b = randomColor(255)

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(()=> {
    if(typeOfColor === "rgb") handleRgbColor()
    else handleHexColor()
  }, [typeOfColor])
  return(
    <div style={{
      width: '100vw',
      height: '100vh',
      background: color
    }}
    >
      <button onClick={()=> setTypeOfColor('hex')}>
        Create HEX Color
      </button>
      <button onClick={()=> setTypeOfColor('rgb')}>
        Create RGB Color
      </button>
      <button onClick={typeOfColor === 'hex' ? 
       handleHexColor : handleRgbColor
      }
      >
        Generate Random Color
      </button>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: "60px",
        fontSize: "60px",
        marginTop: "50px",
        flexDirection: "column",
        gap: "20px",
      }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB COLOR" : "HEX COLOR"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  )
}















// import {useState, useEffect} from 'react'

// export default function RandomColor(){

//    const [typeOfColor, setTypeOfColor] = useState('hex')
//    const [color, setColor] = useState('#000000')

//    function randomColor(length){
//     return Math.floor(Math.random() * length)
//    }
//    function handleRandomHexColor(){
//      let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
//      let hexColor = "#"
//      for(let i=0; i< 6; i++) {
//        hexColor += hex[randomColor(hex.length)]
//      }
//      setColor(hexColor)
//    }
//    function handleRandomRgbColor(){
//      let r = randomColor(255)
//      let g = randomColor(255)
//      let b = randomColor(255)
//      setColor(`rgb(${r},${g},${b})`)
//    }

//    useEffect(()=> {
//     if(typeOfColor === 'hex') handleRandomHexColor()
//     else handleRandomRgbColor()
//    }, [typeOfColor])
//   return(
//     <div style={{
//       width: '100vw',
//       height: '100vh',
//       background: color
//     }}
//     >
//       <button onClick={()=> setTypeOfColor('hex')}>
//         HEX Generate
//       </button>
//       <button onClick={()=> setTypeOfColor('rgb')}>
//         RGB Generate
//       </button>
//       <button onClick={typeOfColor === 'hex' ? 
//         handleRandomHexColor:
//         handleRandomRgbColor
//       }
//       >
//         Random Color Generate
//       </button>
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         color: '#fff',
//         fontSize: '50px',
//         marginTop: '50px',
//         flexDirection: 'column',
//         gap: '20px'
//       }}
//       >
//         <h3>{typeOfColor === 'rgb' ? 'RGB COLOR' : 'HEX COLOR'}</h3>
//         <h1>{color}</h1>
//       </div>
      
//     </div>
//   )
// } 