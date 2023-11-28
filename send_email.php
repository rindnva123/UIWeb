<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $content = $_POST["message"];
    
    // Kết nối và tạo file Excel
    $file = fopen("data.csv", "a"); // Mở file data.csv (nếu chưa tồn tại sẽ tự động tạo)
    
    // Ghi dữ liệu vào file Excel
    fputcsv($file, array($name, $phone, $email, $content));
    
    // Đóng file
    fclose($file);
    
    echo "Đã lưu dữ liệu thành công!";
}
?>
