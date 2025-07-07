// {iconNumber,summary}
function WeatherIcon({ iconNumber }: { iconNumber: number }){
return(
     <img src={`/dist/set01/big/${iconNumber}.png`} alt="" />

)
}
export default WeatherIcon