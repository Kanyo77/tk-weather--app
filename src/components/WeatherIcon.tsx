// Component WeatherIcon
// Nhận vào mã số icon (iconNumber) và hiển thị hình ảnh thời tiết tương ứng
// Icon được lấy từ thư mục `/dist/set01/big/` dưới dạng ảnh PNG
function WeatherIcon({iconNumber}){
     
return(
     <img src={`/dist/set01/big/${iconNumber}.png`} alt="" />

)
}
export default WeatherIcon