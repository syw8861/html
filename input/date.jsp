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
    String today = request.getParameter("today"); 
    String to = request.getParameter("to");
    String birth = request.getParameter("birth"); 
    String weekeend = request.getParameter("weekeend");
    String Now = request.getParameter("Now"); 
    String bdaytime = request.getParameter("bdaytime");
    %>
    <table border="4">
        <tr>
            <td>오늘</td>
            <td><%=today%></td>
        </tr>
        <tr>
            <td>끝일</td>
            <td><%=to%></td>
        </tr>
        <br><br><br><br>
        <table border="4">
            <tr>
                <td>생일</td>
                <td><%=birth%></td>
            </tr>
            <tr>
                <td>주간계획</td>
                <td><%=weekeend%></td>
            </tr>

            <br><br><br><br>

            <table border="4">
                <tr>
                    <td>현재시간</td>
                    <td><%=Now%></td>
                </tr>
                <tr>
                    <td>생일</td>
                    <td><%=bdaytime%></td>
                </tr>
</body>

</html>