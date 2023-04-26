# mouse_cursor_move

![1](https://user-images.githubusercontent.com/130326962/234475119-8e383556-08c3-4df9-918e-9f7c28ab3cf6.png)
![2](https://user-images.githubusercontent.com/130326962/234475125-4ee786b2-5d90-413e-81a7-fed7f38fc766.png)
![3](https://user-images.githubusercontent.com/130326962/234475128-b682354e-19cc-4fbb-a655-3c7b2ff42c1f.png)

각각의 섹션마다 다르게 커스텀한 커서 모양을 보여주고 싶었다.<br>
섹션은 총 3개니, for문을 돌려 각각의 섹션마다 마우스 오버했을 때 커스텀한 커서가 노출되며 마우스 움직임에 따라 같이 움직이는 걸 아래처럼 구현해봤음<br>
추가로 섹션에서 벗어난 div 태그에 마우스 오버하면 커스텀한 커서가 노출되지 않았으면 좋겠어서 mouseout도 따로 만듦

![image](https://user-images.githubusercontent.com/130326962/234475479-7dd1537d-f5f2-4d9b-b355-8ff831afc863.png)

마우스 오버한 section이  item(=this)이 되며, 마우스 오버한 섹션과 item의 인덱스 i가 맞을 경우 생성한 cursor 태그에다가 test 라는 클래스를 추가해줬음<br>
마우스 아웃하면 test 클래스 제거되고.

![image](https://user-images.githubusercontent.com/130326962/234475834-01d10866-edce-4524-8cf6-4775d3eefbbc.png)

그러고 나서 마우스 움직임에 따라 커스텀한 커서도 함께 움직이려면, 윈도우 내에 마우스를 움직이는 이벤트 추가가 필요할 것으로 생각돼서 window 에다가 mousemove 이벤트를 추가했다.<br>
여러 사이트 참고해봤는데, 다들 style.left 및 style.top 으로 설정하는 것보다 translate3d 를 사용해서 설정하는 경우가 많은 것으로 보여 따라해봤다
