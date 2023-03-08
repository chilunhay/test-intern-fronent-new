# Cách chạy code

## 1. Đầu tiên clone project trên github về:

### `git clone https://github.com/chilunhay/test-intern-fronent-new.git`

## 2. Mở thư mục project và chạy lệnh:

### `yarn add` hoặc `npm install`

(Để cài đặt các thư viện cần thiết)

## 3. Khởi chạy project bằng lệnh:

### `yarn start` hoặc `npm start`

Để chạy project với chế độ development
Mở [http://localhost:3000](http://localhost:3000) để xem trên trình duyệt.

## 4. Ở trang Login đăng nhập bằng 1 trong 2 tài khoản đã tạo sẵn:

tài khoản 1: email: `user1@gmail.com`, password: `chi123456`
tài khoản 2: email: `user2@gmail.com`, password: `chi123456`

## 5. Trang Update

Sau khi nhập đầy đủ thông tin vào form nếu click vào button Cancel thì sẽ xóa trống các ô Input.

CLick vào button Update thì thông tin sẽ được lưu vào local storage bằng hàm setItem và sau đó sẽ được hiển thị vào các ô Input
bằng việc dùng hàm getItem ra từ local storage.
