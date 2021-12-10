export const LevelInfo = (data) => 
`https://tgrcode.com/mm2/course_id/${data}`;


// WQV126GNF
// const [result, setResult] = useState("WQV126GNF");
// const [levelInfo, setLevelInfo] = useState({ info: null, thumb: null});
// const [loading, setLoading] = useState(false)

// useEffect(()=> {
//   const fetchData = async () => {
//     setLoading(true)
//     const resLevel = await axios.get(`http://tgrcode.com/mm2/level_info/${result}`);
//     // const resThumb = await axios.get(`http://tgrcode.com/mm2/level_thumbnail/${result}`);

//     setLevelInfo({ info: resLevel.data})
//     setLoading(false)
//   }
//   fetchData();
// },[result]);

// if(levelInfo.data) {
//   console.log(levelInfo.data, levelInfo.thumb)
// }

// if (loading) return (<img className="spinner" src={mario} alt="spinner"/>)