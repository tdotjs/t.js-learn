![x86 registers](https://upload.wikimedia.org/wikipedia/commons/1/15/Table_of_x86_Registers_svg.svg)

# Thanh ghi / Register
## Có 04 nhóm thanh ghi cơ bản
* Thanh ghi dữ liệu : A, B, C, D
  * A: Accumulator: lưu dữ liệu .
  * B: Base: lưu địa chỉ .
  * C: Count: lưu bộ đếm.
  * D: Data: lưu dữ liệu giống A .
* Thanh ghi chỉ số/con trỏ: BP, SP, SI, DI
  * SP: Stack Pointer: lưu con trỏ tới thanh xếp Stack Segment.
  * BP: Base Pointer: lưu địa chỉ nền.
  * DI: Destination lưu địa chỉ đích .
  * SI: Source lưu địa chỉ nguồn .
* Thanh ghi trạng thái/ điều khiển : F, IP
  * F
  * IP: Instruction Pointer: lưu con trỏ đến lệnh bên trong Code Segment (CS).
* Thanh ghi đoạn: CS, SS, DS, ES
  * CS: Code Segment: lưu con trỏ tới



## Thanh ghi dữ liệu
Bao gồm 4 thanh ghi A, B, C, D
### Danh sách
8 bit | 16 bit | 32 bit | 64 bit
----- | ------ | ------ | ------
  AL  |   AX   |  EAX   |   RAX
  BL  |   BX   |  EBX   |   RBX
  CL  |   CX   |  ECX   |   RCX
  DL  |   DX   |  EDX   |   RDX
### Cấu trúc

## Thanh ghi con trỏ
Bao gồm 4 thanh phi BP,SP
### Danh sách
8 bit | 16 bit | 32 bit | 64 bit
----- | ------ | ------ | ------
 BPL  |   BP   |  EBP   |   RBP
 SPL  |   SP   |  ESP   |   RSP
### Cấu trúc

## Thanh ghi chỉ thị
8 bit | 16 bit | 32 bit | 64 bit
----- | ------ | ------ | ------
 SIL  |   SI   |  ESI   |   RSI
 DIL  |   DI   |  EDI   |   RDI

#### Thanh ghi khác
8 bit | 16 bit | 32 bit | 64 bit
----- | ------ | ------ | ------
 R8B  |  R8W   |  R8D   |   R8
 R9B  |  R9W   |  R9D   |   R9
 R10B |  R10W  |  R10D  |   R10
 R11B |  R11W  |  R11D  |   R11
 R12B |  R12W  |  R12D  |   R12
 R13B |  R13W  |  R13D  |   R13
 R14B |  R14W  |  R14D  |   R14
 R15B |  R15W  |  R15D  |   R15

#### Chi tiết
  * Thanh ghi dữ liệu __AX, BX, CX, DX__ độ dài 16 bit
  * AX: Accumulator Reg : thanh ghi đa năng, thường đc dùng để lưu dữ liệu tức thời . bao gồm AH, AL.
  * BX: Base Reg : thanh ghi cơ bản, lưu địa chỉ của hàm/thủ tục hoặc biến . bao gồm BH, BL.
  * CX: Count Reg : thanh ghi đếm, thường dùng để làm bộ đếm . bao gồm CH,CL.
  * DX: Data Reg : thanh ghi dữ liệu giống AX. bao gồm DH,DL.

* Thanh ghi con trỏ và chỉ số __SP, BP, SI, DI__
  * SP : thanh ghi con trỏ của địa chỉ ngăn xếp ( luôn trỏ đến đỉnh ngăn xếp ) // Stack Pointer Reg.
  * BP : thanh ghi con trỏ  nền // Base Pointer Reg.
  * DI : thanh ghi chỉ số đích // Destination Index Reg.
  * SI : thanh ghi chỉ số nguồn // Source Index Reg.

* Thanh ghi đoạn và con trỏ lệnh __CS, DS, SS, ES, IP__
  * CS : Code Segment : thanh ghi đoạn mã lệnh , lưu địa chỉ mã lệnh .
  * DS : Data Segment : thanh ghi đoạn dữ liệu, lưu đia chỉ đoạn dữ liệu .
  * ES : Extra Data Segment : thanh ghi đoạn dữ liệu mở rộng, lưu đia chỉ đoạn dữ liệu mở rộng .
  * SS : Stack Segment: thanh ghi đoạn ngăn xếp, lưu địa chỉ đoạn trong ngăn xếp .
  * IP : Instruction Pointer : được trỏ đến  địa chỉ bên trong CS ( Code Segment )

* Thanh ghi cờ  __F__ bao gồm 16 ô nhớ (16bit) , mỗi ô nhớ là một cờ (Flag) , mỗi cờ có giá trị 0 hoặc 1 .

  * 15: Reserved, luôn là 1 khi CPU là hệ 8086, 186 . luôn là 0 ghi CPU thuộc các hệ sau 8086, 186.
  * 14 : Nested task flag (286+ only), luôn là 1 khi CPU là hệ 8086, 186
  * 12-13 : I/O privilege level : (286+ only), luôn là 1 khi CPU là hệ 8086, 186
  * 11 : Overflow Flag : Cờ tràn bộ đệm. giá trị sẽ là 1 khi quá trình tính toán bị tràn ô nhớ
  * 10 :  Direction Flag : Cờ định hướng . 0 là từ trái qua, 1 là từ phải qua
  * 9 : Interrupt Flag -
  * 8 : Trap Flag
  * 7 : Sign Flag : Cờ dấu . giá trị tương ứng với Bit ngoài cùng bên trái của ô nhớ ( Most Significant Bit , MSB)
  * 6 : Zero Flag : Cờ trắng - cho thấy kết quả phép toán số học hay so sánh trong ô nhớ.
  * 5: Reserved
  * 4 : Auxiliary Flag : chứa bit 3 tới bit 4 theo sau phép toán số học, dùng để chỉ rõ cụ thể phép toán.
  * 3: Reserved
  * 2 : Parity Flag
  * 1: Reserved
  * 0 : Carry Flag

### Thanh ghi đa năng

#### Thanh ghi 32 bit
```
EAX // thanh ghi 32 bit, mở rộng thanh ghi AX,
```
#### Thanh ghi 16 bit
```
AX // thanh ghi A, vùng nhớ kích thước 16 bit AH,AL
BX // tương tự A
CX // tương tự A
DX // tương tự A
```
#### Thanh ghi 8 bit

```
AH // Địa chỉ vùng nhớ cao thanh ghi A kích thước 8 bit
AL // Địa chỉ vùng nhớ thấp thanh ghi A kích thước 8 bit
BH,BL // tương tự A
CH,CL // tương tự A
DH,DL // tương tự A
```
