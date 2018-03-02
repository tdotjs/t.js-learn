## WEB là gì ?
WEB là cách gọi tắt của `World wide web` hay `The Web` nếu dịch nôm dịch na thì là mạng kết nối thông tin toàn cầu, nơi mà các loại văn bản và tài nguyên được xác định thông qua URL (Uniform Resource Locators) và liên kết đến nhau thông qua siêu liên kết ( hyperlinks )

## Qui trình của một WEB Request
1. Người dùng nhập URL bao gồm Domain + Path lên Browser
2. Browser sẽ truy cập DNS cache để tìm xem Domain đó được trỏ đến IP nào, nếu ko có thì request lên DNS Server để lấy thông tin IP về .
3. Sau khi có IP của domain thì Browser sẽ mở một cổng ngẫu nhiên để kết nối đến cổng 80 của IP vừa lấy được ở bước 02.
4. Sau khi kết nối thành công, Browser sẽ gửi gói tin theo chuẩn HTTP (HTTP Request) và đợi Server trả kết quả về cũng theo chuẩn HTTP ( HTTP Response )
5. Ở phía Server nhận thông tin được gửi lên từ Browser, kiểm tra, xử lí và trả về kết quả thông qua kết nối được tạo ra trước đó từ Browser sau đó ngắt kết nối .
6. Browser nhận kết quả trả về là biên dịch tùy theo `Content-Type`.
7. Nếu kết quả trả về có `Content-Type` là `text/html`, Browser sẽ biên dịch phần body của kết quả, theo qui chuẩn của HTML thì sẽ có một số mã lệnh yêu cầu thêm tài nguyên từ bên server nên Browser sẽ mở thêm cổng để kết nối đến Server và gửi yêu cầu tới Domain + Path ví dụ như CSS, Javascript hay hình ảnh .
8. Sau đó khi nhận kết quả trả về từ Server Browser sẽ gửi phần biên dịch tới Renderer để hiển thị ra màn hình .
Ghi chú:
1. Quá trình gửi thêm Request sẽ là Multi thread hoặc Single Thread tùy theo chức năng của Browser và giới hạn từ phía Server .
2. Sau mỗi Response Browser sẽ gửi tới Renderer để hiển thị .
3. Browser hiện tại là một phần mềm bao gồm HTML Interpreter, CSS Interpreter , Javascript Interpreter ...
4. Kết nối được tạo ra từ Browser lên Server mặc định sẽ đóng ngày sau khi Server xử lí xong, ngoại trừ một số gói tin đặc biệt được qui định sẵn sẽ duy trì kết nối cho tới khi Browser hoặc Server chủ động gửi lệnh ngắt .

Chi tiết hơn nữa các bạn nên search về HTTP specification, Http diagram, Http workflow ...

Vậy công việc của chúng ta nằm ở bước thứ 5, tạo một web server để xử lí những yêu cầu từ Browser . Một số điểm lưu ý :
+ Web Server chỉ xử lí những gói tin chuẩn HTTP
+ Web Server mặc định lắng nghe trên cổng 80, nhưng ko phải là bắt buộc, nó có thể nghe trên những cổng khác với điều kiện cổng đó chưa được sử dụng bởi phần mềm khác
+ Web Server mặc định đóng kết nối sau khi xử lí xong.

Với NodeJS về cơ bản với những gói thư viện có sẵn ta có thể tạo WEB server bằng 02 cách .
1. http.createServer
2. net.createServer

gói `http` thực chất là gói mở rộng của `net` dùng để xử lí những gói tin theo chuẩn HTTP.

## Server
Dịch nôm na là Người phục vụ, ở đây WEB Server là
