<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
        String username = request.getParameter("userName");
        String pass = request.getParameter("pass");
        String gender = request.getParameter("gender");
        if(gender.equals("M"))
            gender = "남";
        else
            gender = "여";
        String[] hobbies = request.getParameterValues("hobby"); //배열에 담을려면 getParameterValues를 써야한다.
        String birth = request.getParameter("birth");
        int likeit = Integer.parseInt(request.getParameter("likeit")); //getparameter가 가지고 오는 값은 string타입이다. 형변환 필요
        String suject = request.getParameter("suject");
    %>

    <table border="5">
        <tr>
            <td>사용자 이름</td><td> <%=username%> </td>
        </tr>
        <tr>
            <td>성별</td><td><%=gender%></td>
        </tr>
        <tr>
            <td>취미</td>
            <td>
                <% for(String hobby : hobbies)
                {%>
                    <%=hobby%>&nbsp; 
                <%}%>
            </td>
        </tr>
        <tr>
            <td>생일</td><td><%=birth%></td>
        </tr>
        <tr>
            <td>Likeit</td>
            <td><progress value=<%=likeit%> max="100"></progress> <%=likeit%>% </td>
        </tr>
    </table>

</body>
</html>