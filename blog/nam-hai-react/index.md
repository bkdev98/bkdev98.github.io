---
title: Năm hai React
date: 07/11/2018
description: Bạn có thích những gì mình làm không?
thumbnail: thumb.jpeg
tags: ["react", "redux", "general"]
---

Bắt đầu một công nghệ mới có thể khá rắc rối. Bạn sẽ tìm thấy mình trong một đại dương mênh mông các hướng dẫn, bài viết, cùng hàng triệu những ý kiến cá nhân. Và ai nấy cũng đặt tiêu đề rằng họ là đã tìm thấy “cách đúng đắn nhất“.

Trước khi lặn xuống đại đương ấy, chúng ta phải hiểu các khái niệm cơ bản của công nghệ. Sau đó, ta cần phát triển một tư duy dựa trên công nghệ đó. Nếu bạn bắt đầu học React, điều đầu tiên cần làm là hiểu được những suy nghĩ trong React. Chỉ như vậy, sau này bạn mới có thể kết hợp những suy nghĩ khác nhau thành một.

Trong bài viết này, tôi sẽ đề cập đến một số bài học mà tôi đã học được về tư duy này từ trải nghiệm cá nhân với React trong hai năm qua. Chúng ta sẽ đi qua những ngày đêm làm việc với các [side project](https://khanhquoc.press/portfolio) cho tới những ứng dụng có scale vừa, cũng như qua những buổi seminar tại Innoteq mà tôi tham gia hướng dẫn.

!["Photo by Rhand McCoy on Unsplash"](./thumb.jpeg){.full-width}

## React đang phát triển, bạn phải luôn luôn cập nhật
Nếu bạn có mặt ở thời điểm Facebook đưa ra những thông báo ban đầu về phiên bản 16.3.0, bạn sẽ thấy mọi người đều đã phấn khích như thế nào.
Dưới đây là một số thay đổi và cải tiến mà tôi cập nhật được:
* Context API được nâng cấp, trở thành một sự thay thế cho Redux
* createRef API
* forwardRef API
* StrictMode
* Những thay đổi trong Component Lifecycle

Nhóm React Core và những contributors đang thực hiện công việc với một hiệu suất ấn tượng để cải tiến công nghệ mà chúng ta yêu thích. Trong phiên bản 16.4.0, thậm chí chúng ta sẽ có thêm Pointer Event.

Những thay đổi tiếp theo chắc chắn sẽ đến và chỉ là vấn đề thời gian: Async Rendering, Caching, cùng phiên bản 17.0.0 với rất nhiều thứ khác nữa.
Vì vậy, nếu muốn theo kịp, bạn phải luôn được cập nhật những điều đang xảy ra. Tôi thường hay dành 15 phút mỗi này để theo dõi tweet từ những người nổi tiếng trong cộng đồng React. Một số cái tên gợi ý cho bạn: [Dan Abramov](https://twitter.com/dan_abramov), [Wes Bos](https://twitter.com/wesbos), [Sophie Alpert](https://twitter.com/sophiebits),… và tất nhiên là [trang chính thức của React](https://twitter.com/reactjs).

Biết được cách mọi thứ hoạt động và tại sao chúng được phát triển. Hiểu được những vấn đề đang cần được giải quyết và việc lập trình trở nên dễ dàng hơn như thế nào. Những điều này sẽ giúp bạn rất nhiều.

## Đừng sợ phân tách code thành từng mảnh nhỏ
React dựa trên khái niệm component-base. Vì vậy, bạn nên tận dụng khái niệm này và không ngại chia các mảnh lớn thành những thành phần nhỏ hơn.
Đôi khi một component có thể được tạo thành chỉ từ bốn đến năm dòng code, và trong nhiều trường hợp, điều đó hoàn toàn ổn.
Tận dùng được điều này để khi một ai đó, hay thậm chí là chính bạn, cần phải chỉnh sửa bảo trì những dòng code của một dự án hồi năm ngoái, sẽ không phải mất cả ngày để hiểu được mọi thứ đang hoạt động thế nào.
```
// dễ hiểu mà phải không?
return (
  <Container>
    <ChangeButton
      onClick={this.changeUserStatus}
      text="Cập nhật"
    />
    <UserInformation status={status}/>
  </Container>
);
```

Bạn không cần phải xây dựng những component nặng nề về logic. Chúng có thể chỉ là một view đơn giản trực quan. Cải thiện được khả năng đọc và kiểm tra code sẽ đem lại nhiều lợi ích cho team bạn.
```
import ErrorMessage from './ErrorMessage';
const NotFound = () => (
  <ErrorMessage
    title="Không tìm thấy trang."
    message="Trang bạn đang tìm không tồn tại!"
    className="test_404-page"
  />
);
```

Trong ví dụ ở trên, các thuộc tính được định nghĩa tĩnh, chúng ta có thể chỉ cần một component chịu trách nhiệm hiển thị thông báo lỗi “Không tìm thấy trang”, chẳng cần gì thêm nữa.
Ngoài ra, nếu không thích sử dụng className, tôi sẽ gợi ý bạn sử dụng Styled Components. Thư viện này sẽ cải thiện khả năng đọc rất nhiều.
```
const Title = styled.h1`
  font-size: 36px;
  line-height: 40px;
  margin-right: 5px;
  padding: 0px;
`;
//..
<Card>
  <Title>{titleText}</Title>
  <InfoName>Khanh Quoc Press</InfoName>
</Card>
```

Còn nếu lo lắng về việc tạo nhiều component do chưa biết phải cấu trúc thư mục dự án với những file này như thế nào, tôi đã sử dụng [fractal structure](https://hackernoon.com/fractal-a-react-app-structure-for-infinite-scale-4dab943092af) và chắc rằng nó sẽ giúp ích cho bạn.

## Đừng ngại tìm hiểu những vấn đề nâng cao
Đôi lúc bạn sẽ nghĩ rằng mình chưa hiểu đủ điều gì đó để có thể tiếp tục đi sâu hơn. Đừng quá lo lắng về điều này, thỉnh thoảng hãy tự thách thức bản thân và chứng minh rằng mình đã sai.

Càng tìm hiểu về những chủ đề nâng cao, bạn sẽ biết nhiều hơn những thứ cơ bản và cách chúng được dùng cho những thứ lớn.
React có rất nhiều chủ đề hay cho bạn tìm hiểu:
* Compound Components
* Higher Order Components
* Render Props
* Smart/Dumb Components
* nhiều thức khác nữa…

Khám phá những điều này, hiểu được tại sao và ở đâu chúng được dùng, bạn sẽ cảm thấy thoải mái hơn rất nhiều khi làm việc với React.
```
// ma thuật gì đây?
// sẽ là không khó nếu bạn chịu thử
render() {
  const children = React.Children.map(this.props.children,
   (child, index) => {
      return React.cloneElement(child, {
        onSelect: () => this.props.onTabSelect(index)
    });
 });
 return children;
}
```

Ngoài ra, đừng ngại thử một điều gì đó mới vào công việc của bạn, tất nhiên với giới hạn nhất định. Đừng thử nghiệm những điều tuyệt vời này chỉ trong các dự án cá nhân.
Mọi người sẽ đặt câu hỏi và điều đó là chuyện bình thường. Nhiệm vụ của bạn là bảo vệ công việc và quyết định của mình với những tranh luận mạnh mẽ nhất.
Mục đích của bạn là giải quyết vấn đề hiện tại, giúp việc phát triển dễ dàng hơn, hoặc có thể chỉ là ngồi clean mấy dòng code. Ngay cả khi đề xuất của bạn bị từ chối, bạn sẽ biết được nhiều điều hơn là ngồi im lặng.

## Đừng làm mọi thứ trở nên phức tạp
Trong cuộc sống cũng như ở khắp mọi nơi, chúng ta cần có sự cân bằng. Nói cho đơn giản, chúng ta nên tránh việc quá lạm dụng kỹ thuật, bởi sự thực tế là rất quan trọng. Viết code cho dễ hiểu, miễn hoàn thành được mục đích của nó.

Nếu [bạn không cần Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367), nhưng lại muốn sử dụng nó vì ai cũng dùng mà không biết đâu là mục đích thực sự, thì hãy có lập trường riêng, và đừng dùng.

Đôi khi bạn có thể nghĩ rằng sử dụng các công nghệ mới nhất, viết những đoạn code phức tạp nhất là cách mà bạn đang chứng tỏ với mọi người rằng “I’m not a junior, I am becoming a senior. Look what can I do!”

Thành thật mà nói, đó là suy nghĩ của tôi khi bắt đầu cuộc hành trình này. Nhưng theo thời gian, bạn hiểu rằng code được viết đơn giản không hoa mỹ hoặc chỉ cần nó chạy thôi là đã quá đủ rồi.

Luôn nhớ rằng còn có những người đồng nghiệp có thể sẽ làm việc trên các dự án của bạn và bạn không phải là người duy nhất chịu trách nhiệm phát triển, sửa chữa, thử nghiệm tất cả những thứ này. Một team có thể hiểu được những gì mỗi thành viên làm bằng vài phút thảo luận chứ không phải trong một cuộc họp nửa ngày.

## React là một sự đầu tư xứng đáng
Với tôi, React là điều tuyệt vời nhất xảy đến với web kể từ jQuery. Nếu mới bắt đầu lập trình, chắc hẳn giờ này bạn cũng chẳng cần quan tâm jQuery là gì, nhưng mười năm trước, jQuery là một cuộc cách mạng thật sự mà minh chứng là xu hướng thiết kế web động bằng jQuery được phát triển rộng rãi.

Điều mà tôi thích nhất ở React là sự đơn giản mà nó tạo ra, giúp tôi có thể hoàn toàn tập trung vào khía cạnh tính năng và giao diện của ứng dụng trong lúc phát triển nó. React xử lý tất cả các vấn đề hiển thị ra trình duyệt, thao tác với DOM… Tất cả những gì cần làm là chỉ ra uh, tôi muốn cái button ở đây, tôi muốn cái input ở kia, rồi kết hợp với dữ liệu và logic, và chúng chỉ việc hoạt động. Đó chính là vẻ đẹp của React, làm cho ý tưởng lập trình kiểu như vậy trở thành hiện thực.

Trong hai năm vừa rồi, mục tiêu của tôi đơn giản chỉ là có thể đối xử với React tốt hơn. Tôi có thể nói về nó hàng giờ, và muốn những người xung quanh mình cùng thưởng thức điều tuyệt vời của nó.

Tôi có thể ngồi suốt đêm, không ngừng nghỉ, xem những buổi nói chuyện, những workshop về React và thực sự enjoy giây phút đó.
Và ngày hôm nay, tôi vẫn cảm thấy hứng thú với những cập nhật của React giống như những cảm xúc khi viết được component đầu tiên của mình hai năm trước.

> Bạn có thích những gì mình làm không?

Nếu không, hãy tìm kiếm những điều đặc biệt mà bạn có thể nói về hàng giờ, thậm chí có thể dành ngày đêm tìm hiểu.

Bởi vì thành công không thể bị ép buộc, nó phải đạt được.

Nếu tôi có thể quay trở lại những ngày tháng cũ, đây là những gì tôi sẽ nói với bản thân mình để chuẩn bị cho cuộc hành trình phía trước.
