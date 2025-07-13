// Component HorizontallyScrollable
// Cho phép scroll ngang nội dung bằng cách giữ chuột trái và kéo
// Sử dụng ref để điều khiển scrollLeft của phần tử DOM
import { useRef } from 'react';
// Tham chiếu đến phần tử DOM để điều khiển scroll ngang
function HorizontallyScrollable({ children, className = '' }) {
  const scrollRef = useRef();
  // Hàm xử lý sự kiện khi bắt đầu nhấn chuột
  const handleMouseDown = (evt) => {
    const oldX = evt.pageX; // Tọa độ chuột khi bắt đầu kéo
    const scrollLeft = scrollRef.current.scrollLeft; // Vị trí scroll hiện tại
    // Khi chuột di chuyển, cập nhật vị trí scroll ngang theo độ lệch chuột
    const handleMouseMove = (evt) => {
      const newX = evt.pageX;
      const offset = newX - oldX;

      scrollRef.current.scrollLeft = scrollLeft - offset;
    };
    // Khi thả chuột, gỡ bỏ event listener để tránh memory leak
    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
    // Thêm event listener khi chuột đang kéo
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      className={className}
      ref={scrollRef}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
}

export default HorizontallyScrollable;
