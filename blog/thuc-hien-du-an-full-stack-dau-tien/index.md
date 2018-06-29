---
title: Thực hiện dự án full-stack đầu tiên
date: 07/17/2017
tags: ["react", "startup"]
description: >-
  Đó là một ngày trời nhiều nắng, một khoảng thời gian đẹp, loay hoay với những
  nỗi niềm riêng, là khi tôi biết mình cần phải ngồi xuống đâu đó, và code.
---

Đó là một ngày trời nhiều nắng, một khoảng thời gian đẹp, loay hoay với những nỗi niềm riêng, là khi tôi biết mình cần phải ngồi xuống đâu đó, và code.
Cũng chẳng phải là câu chuyện xúc động hay giàu cảm hứng, ý tưởng của dự án chợt đến khi bản thân đang đi tìm ý tưởng cho dự án (haha). Ecommerce và location based, hai khái niệm không còn xa lạ với thế giới ngày hôm nay, đặc biệt khi Amazon, Lazada, Uber, Grab,... đang phát triển mạnh mẽ. Nhưng chắc do nghĩ mình vẫn có thể làm điều gì đó tốt, nên cứ đơn giản là bắt đầu. Bởi cũng lâu quá không làm gì cho riêng mình, [mà dòng người ngược xuôi ngoài kia, chẳng lúc nào ngơi nghỉ](https://khanhquoc.press/blog/chieu-ve-muon-tren-duong-khoi-nghiep/).

### Backend
![Working](https://i.imgur.com/r22vgxN.jpg){.full-width}
> Any application that can be written in JavaScript, will eventually be written in JavaScript. - Jeff Atwood

Bản thân tôi rất yêu thích JavaScript cũng như [NodeJS](https://nodejs.org/). JavaScript mang trong mình một phong thái rất nhẹ nhàng và phóng khoáng, chẳng quá khuôn khổ, chẳng quá đơn điệu, đủ để không làm tôi rối loạn trong một mớ code bòng boong.
Đó là lý do vì sao NodeJS là ưu tiên hàng đầu cho phần backend khi tôi bắt tay vào thực hiện dự án.

![Map](https://source.unsplash.com/vfzfavUZmfc/1600x900){.full-width}

Là một sản phẩm hoạt động đa phần trên bản đồ, dự án đòi hỏi phải xác định vị trí và truy vấn khoảng cách của các đối tượng. Google và tìm được vài kết quả có vẻ hứa hẹn:
* [s2 Geometry của Google](https://git.daplie.com/Daplie/s2-geometry.js), được sử dụng bởi Ingress và Pokemon Go, đáng để thử.
* [Haversine Formula](https://en.wikipedia.org/wiki/Haversine_formula), thú vị, nhưng implement sẽ không dễ dàng.
* Và [Mongo Geospatial](https://docs.mongodb.com/manual/geospatial-queries/). Bingo!!!

![Dream Big](https://source.unsplash.com/Cc4sToR2Oc0/1600x900){.full-width}

Là cơ sở dữ liệu noSQL kết hợp tuyệt vời với NodeJS, mongoDB có đủ tính linh hoạt cho một side project mà vẫn đảm bảo hiệu năng và tốc độ cho một ứng dụng hướng đến khối lượng lớn người dùng và những truy vấn. Cũng có được khoảng thời gian tiếp xúc càng khiến tôi muốn dành thêm tình cảm cho mongoDB, và có thể nói đến hiện tại tôi chưa từng phải hối hận với quyết định này.
Lúc viết bài này tôi đã cơ bản hoàn thành được phần query và xử lý location, cảm giác cực kì hưng phấn!

### ReactJS
Nếu có ai hỏi công nghệ nào làm tôi ấn tượng nhất những năm gần đây, câu trả lời chắc chắn phải là React.

![ReactJS](https://source.unsplash.com/aI1tDC8PaLM/1600x900){.full-width}

Những mỹ từ tốt đẹp nhất để dành cho React có lẽ chẳng cần thiết nữa. React bây giờ không còn đơn thuần là một thư viện JavaScript. Với sự ra đời của React Native cùng rất nhiều những project mã nguồn mở đi kèm, React thực sự đã trở thành một hệ sinh thái, nơi lập trình viên không còn phải loay hoay với vô số những ngôn ngữ để tạo ra sản phẩm có thể tiếp cận với nhiều người sử dụng nhất có thể.

[React thay đổi tư duy của lập trình viên về quy trình thực hiện sản phẩm, thay đổi cách thức nhóm hoạt động.](https://www.youtube.com/watch?v=MGuKhcnrqGA)

### Learn Once, Write Everywhere
Tôn chỉ nổi tiếng của Java là "Write Once, Run Everywhere", có tầm ảnh hưởng lớn tới rất nhiều ngôn ngữ và công cụ giúp viết ứng dụng đa nền tảng sau này. React không rẽ theo hướng đi này.
Nhiều người nhầm lẫn rằng React Native cho phép lập trình viên viết ứng dụng một lần và có thể chạy được trên nhiều nền tảng, nhưng sự thật không phải vậy.

> "Learn Once, Write Everywhere"

Những nền tảng khác nhau có một ngôn ngữ thiết kế khác nhau, là cái tươi mới trẻ trung của Human Interface trên iOS hay chất liệu hiện đại mà Material Design đem đến cho Android.
Vẻ đẹp của React Native nằm ở việc một khi đã nắm được concepts, mình có thể áp dụng nó lên nhiều nền tảng. Bởi cho cùng, trải nghiệm người dùng mới là thứ tối quan trọng.

[React Native: Bringing modern web techniques to mobile | Engineering Blog | Facebook Code | Facebook](https://code.facebook.com/posts/1014532261909640/react-native-bringing-modern-web-techniques-to-mobile/)

### Full-stack 🐳
Cũng đã tròn một tháng kể từ hai cái "initial commit", một cho mobile client, một cho api. Vậy là cố gắng sắp xếp thời gian học tập và công việc gọn gàng nhất có thể để dành một góc vui vẻ ba giờ mỗi tối cho dự án, thậm chí được tuần nghỉ hè cũng bị hắn tận dụng triệt để 🤤

![Summer Vacation](https://i.imgur.com/Yk1t5kJ.jpg){.full-width}

Một mình làm full-stack, được cái tự chủ bản thân, nhưng khó khăn thì nhiều lắm. Khối lượng công việc phải làm là rất lớn. Làm UI phải làm sao cho tinh tế, tiện dụng. Làm API phải làm sao chính xác, bảo mật. Nhiều khi nếu không có lon bia thì chắc đã không qua khỏi :))
Thử thách nữa tôi đang phải đối mặt là implement realtime, với vốn kinh nghiệm hoàn thành vài ba ứng dụng nhắn tin, caro tự sướng thời gian thực, bản thân cũng không hoàn toàn tự tin về khả năng làm WebSocket của mình.
Nhưng cũng chẳng sao, chỉ cần còn sự tin tưởng, là làm được.

### Goodbye Yellow Brick Road
Ừ thì cứ vậy mà tiếp tục. Mục tiêu của bản thân khi thực hiện sản phẩm này không gì khác là muốn nó có thể đi vào hoạt động và giúp ích cho người sử dụng, hy vọng phiên bản đầu tiên sẽ được hoàn thiện trong vài tuần tới.

![Goodbye Yello Brick Road](https://i.imgur.com/m9GHc7M.jpg){.full-width}

Mới đó đã hai giờ sáng, mà bản [Goodbye Yellow Brick Road](https://open.spotify.com/track/4IRHwIZHzlHT1FQpRa5RdE) vẫn đang thổn thức, còn tôi vẫn mê say trong đống code ngổn ngang.
Lại một ngày nữa trôi qua, một ngày trời sẽ nhiều nắng.
