## **Đây là kênh chia sẻ kiến thức phi lợi nhuận dành cho lập trình viên**

Các bạn có thể liên hệ nếu muốn trợ giúp trực tiếp hoặc đóng góp cho dự án.
Email: tricky@t4v.net
FB: tricky.gvr.vn
Twitter: trickym4st3r
Github: trickymast3r

---

### DANH SÁCH CÁC BÀI VIẾT

* [Một số kiến thức vs định nghĩa về lập trình không thể bỏ qua](#m-t-s-ki-n-th-c-vs-nh-ngh-a-v-l-p-tr-nh-kh-ng-th-b-qua)
  * [Kiến trúc máy tính ?](#kien-truc-may-tinh)
  * [Mô hình mạng máy tính](#mo-hinh-mang-may-tinh)
    * phần mềm giao tiếp với nhau như nào ?
    * phần mềm giao tiếp với máy chủ như nào ?
    * protocol là gì ?
    * http hoạt động thế nào ?
    * websocket là gì ?
    * cookie/session hoạt động như nào ?
  * Ngôn ngữ lập trình ?
    * Ngôn ngữ máy là gì ?
    * Ngôn ngữ lập trình bậc thấp Assembly ?
* Lập trình WEB và phần mềm
  * NodeJS
    * Cơ sở
    * React
    * Angular
  * GoLang
  * PHP
* Quản lý cài đặt máy chủ
  * Ubuntu
  * CentOs
  * Nginx
  * Apache

# Một số kiến thức vs định nghĩa về lập trình không thể bỏ qua

## Kiến trúc máy tính

`Chưa viết`

## Ngôn ngữ lập trình

### **Ngôn ngữ máy là gì ?**

( Machine Language / Machine code )
Đầu tiên ae phải hiểu là cái thứ mà chúng ta đg làm việc vs nó hàng ngày hàng giờ là một cái máy vô tri vô giác, và thực chất nó chỉ hiểu được những con số 0 và 1 (`nhị phân`,`binary digit`,`bit` ). Tất nhiên ý của mình nó ở đây là cái `CPU` (`bộ xử lí trung tâm`,`central processing unit`) trung tâm của rắc rối hjhj, nói đến đây chắc cũng nhiều bạn thắc mắc là sao chỉ từ 2 số 0 vs 1 mà nó lại làm được nhiều thứ phức tạp vậy, vầng thực ra thì ko có gì tự nhiên sinh ra ở đây cả, người tạo ra cái `CPU` này ng ta phải dựng cái đám `CPU` này lên dựa trên một bộ `Kiến Trúc Máy Tính` (`computer architecture`) và trong đó cái thứ của nợ mà ta đg thắc mắc là `tập hợp những chỉ thị`(`instructions set`) nằm trong bộ kiến trúc nhằm giúp thằng (`CPU`) có thể hiểu được chúng ta muốn nó làm gì, ví dụ dễ hiểu giống như kiểu chúng ta huấn luyện cún vậy, dơ tay lên bắn + bùm là cún sẽ ngã ra ... huấn luyện cún khó hơn vì mình ko sản xuất ra nó và mình cũng ko mổ não nó ra mà nhét `chỉ thị` vào được 😂😂😂 ... thế nên trong `CPU` đã có sẵn những `chỉ thị` rồi tuỳ theo từng dòng `CPU` mà ta có những tập hợp chỉ thị (instruction set) khác nhau .

### **Ngôn ngữ lập trình bậc thấp Assembly**

Ngôn ngữ **ít** phổ biến nhất hiện nay chắc là ông này . ít phổ biến nhưng lại là ngôn ngữ được sử dụng nhiều nhất chỉ sau thằng `machine language` ở trển ... hjhj ... bởi vì hầu hết tất cả những ngôn ngữ lập trình chúng ta đang sử dụng hiện nay đều sẽ được những `compiler` hoặc `interpreter` chuyển đổi về một dạng chung đó là `Assembly` bởi vì

## Mô hình mạng máy tính

Các bạn ở đây chắc ai cũng đã từng dựng web, dựng những phần mềm có kết nối qua lại giữa những máy tính vs nhau nhưng chắc cũng không mấy bạn hiểu rõ được nguyên lí căn bản của kết nối và phân biệt được các loại gói tin ... v.v nếu nói hết về network thì khá là rộng nên thôi mình chỉ đề cập đến mấy thứ sau:

1. phần mềm giao tiếp với nhau như nào ?
2. phần mềm giao tiếp với máy chủ như nào ?
3. protocol là gì ?
4. http hoạt động thế nào ?
5. websocket là gì ?
6. cookie/session hoạt động như nào ?

## Lập trình phần mềm

Hầu hết chúng ta lập trình phần mềm đều sử dụng những ngôn ngữ bậc cao, cao cấp ... đại loại như JS, PHP, HTML, CSS, Python, C# ... nhiều lắm nhưng ở đây mình tập trung vào NodeJS trước nhé .

### NodeJS

NodeJS thực chất là một platform, sử dụng ngôn ngữ Javascript theo chuẩn ECMA Script và trình thông dịch V8 (`Interpreter`) . Tất cả mã nguồn của chúng ta sẽ được gửi qua interpreter V8 để dịch ra mã máy và cache lại trong quá trình chạy .
Core NodeJS & V8 được xây dựng chủ yếu từ ngôn ngữ C++ .
Các thư viện mà NodeJS cung cấp cho chúng ta sử dụng được viết bằng JS .
Để chạy NodeJS bạn chỉ cần duy nhất một file binary `node.exe` ở Windows hoặc `node` ở Linux dung lượng khoảng 22MB ... khá lớn vì nó chứa nhiều thư viện bên trong .
Hiện nay gói cài đặt của NodeJS thường kèm theo thằng NPM nó là NodeJS Package Manager sử dụng để quản lý cài đặt cập nhật xoá các thư viện được chia sẻ nằm trong mạng npmjs.com .

#### **Lí do tại sao lại chọn NodeJS**

1. Vì NodeJS sử dụng ngôn ngữ JavaScript, nên khi bạn làm web bạn sẽ không phải học thêm một ngôn ngữ nữa ngoài HTML vs CSS.
2. Vì NodeJS sử dụng ngôn ngữ JS nên việc viết thư viện xử lí cả ở backend lẫn frontend cũng tiện hơn là sử dụng ngôn ngữ khác.
3. Vì NodeJS được cộng đồng support rất mạnh nên bạn sẽ ko lo về việc thiếu thư viện .
4. Vì NodeJS sử dụng trình thông dịch V8 của Google khá nhanh mạnh và ổn định .
