const products = [
    { name: "노트북", price: 1200000 },
    { name: "마우스", price: 30000 },
    { name: "키보드", price: 80000 },
    { name: "무선헤드셋", price: 110000 },
    { name: "스피커", price: 40000 }
]

// 1. products에 담긴 객체들, 원본을 유지
// name: "상품이름(할인)", price는 10% 할인가격 업데이트
// 2. 5만원 이하인 상품들만 10% 할인 업데이트