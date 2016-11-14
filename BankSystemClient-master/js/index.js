
    function searchAllMember() {
        $.ajax({
            url : "http://localhost:7070/bank/selectAllMember", // 서버 프로그램의 url
            dataType : "jsonp", //만약 jsonp방식으로 사용한다면, 반드시 jsonp 명시
            type : "GET", //기본 값은 get
            jsonp : "callback", //만약 jsonp방식을 이용하면 jsonp 속성이 나와야 함
            timeout : 3000,//서버 프로그램을 기다리는 시간
            success : function (result) {
                $("#memberAll").empty();
                for (var i = 0; i < result.length; i++) {
                    var tr = $("<tr></tr>");
                    var memberId = $("<td></td>").text(result[i].memberId);
                    var memberName = $("<td></td>").text(result[i].memberName);
                    var memberAccount = $("<td></td>").text(result[i].memberAccount);
                    var memberBalance = $("<td></td>").text(result[i].memberBalance);

                    tr.append(memberId);
                    tr.append(memberName);
                    tr.append(memberAccount);
                    tr.append(memberBalance);

                    $("#memberAll").append(tr);
                }
            },
            error : function () {
                alert("실패")
            }
        })
    }

    function searchMember() {

        $.ajax({
            url : "http://localhost:7070/bank/selectMember", // 서버 프로그램의 url
            dataType : "jsonp", //만약 jsonp방식으로 사용한다면, 반드시 jsonp 명시
            type : "GET", //기본 값은 get
            jsonp : "callback", //만약 jsonp방식을 이용하면 jsonp 속성이 나와야 함
            timeout : 3000,//서버 프로그램을 기다리는 시간
            data : {
                memberId : $("#memberId").val()
            },
            success : function (result) {
                $("#memberDetail").empty();
                var tr = $("<tr></tr>");
                var memberId = $("<td></td>").text(result.memberId);
                var memberName = $("<td></td>").text(result.memberName);
                var memberAccount = $("<td></td>").text(result.memberAccount);
                var memberBalance = $("<td></td>").text(result.memberBalance);

                tr.append(memberId);
                tr.append(memberName);
                tr.append(memberAccount);
                tr.append(memberBalance);

                $("#memberDetail").append(tr);

            },
            error : function () {
                alert("실패")
            }
        })
    }

    function inputBalance() {
        var id = $("#depositMemberId").val();
        var balance = $("#depositMemberBalance").val();

        $.ajax({
            url : "http://localhost:7070/bank/deposit", // 서버 프로그램의 url
            dataType : "jsonp", //만약 jsonp방식으로 사용한다면, 반드시 jsonp 명시
            type : "GET", //기본 값은 get
            jsonp : "callback", //만약 jsonp방식을 이용하면 jsonp 속성이 나와야 함
            timeout : 3000,//서버 프로그램을 기다리는 시간
            data : {
                memberId : id,
                memberBalance : balance
            },
            success : function (result) {
                alert("seccess")
            },
            error : function () {
                alert("실패")
            }
        })
    }

    function withrawBalance() {
        var id = $("#withdrawMemberId").val();
        var balance = $("#withdrawMemberBalance").val();

        $.ajax({
            url : "http://localhost:7070/bank/withraw", // 서버 프로그램의 url
            dataType : "jsonp", //만약 jsonp방식으로 사용한다면, 반드시 jsonp 명시
            type : "GET", //기본 값은 get
            jsonp : "callback", //만약 jsonp방식을 이용하면 jsonp 속성이 나와야 함
            timeout : 3000,//서버 프로그램을 기다리는 시간
            data : {
                memberId : id,
                memberBalance : balance
            },
            success : function (result) {
                alert("seccess")
            },
            error : function () {
                alert("실패")
            }
        })
    }

    function transferBalance() {
        var sendMemberId = $("#sendMemberId").val();
        var receiveMemberBalance = $("#receiveMemberBalance").val();
        var transferBalance = $("#transferBalance").val();

        $.ajax({
            url : "http://localhost:7070/bank/transfer", // 서버 프로그램의 url
            dataType : "jsonp", //만약 jsonp방식으로 사용한다면, 반드시 jsonp 명시
            type : "GET", //기본 값은 get
            jsonp : "callback", //만약 jsonp방식을 이용하면 jsonp 속성이 나와야 함
            timeout : 3000,//서버 프로그램을 기다리는 시간
            data : {
                sendMemberId : sendMemberId,
                receiveMemberBalance : receiveMemberBalance,
                transferBalance : transferBalance
            },
            success : function (result) {
                alert("seccess")
            },
            error : function () {
                alert("실패")
            }
        })
    }


    function checkMember() {
        var checkMemberId = $("#checkMemberId").val();
        console.log("1"+checkMemberId);

        $.ajax({
            url : "http://localhost:7070/bank/checkMember", // 서버 프로그램의 url
            dataType : "jsonp", //만약 jsonp방식으로 사용한다면, 반드시 jsonp 명시
            type : "GET", //기본 값은 get
            jsonp : "callback", //만약 jsonp방식을 이용하면 jsonp 속성이 나와야 함
            data : {
                checkMemberId : checkMemberId
            },
            success : function (result) {

                $("#checkMemberList").empty();




                for (var i = 0; i < result.length; i++) {
                    console.log("2"+result.length);
                    var tr = $("<tr></tr>");
                    var memberId = $("<td></td>").text(result[i].memberId);
                    var memberName = $("<td></td>").text(result[i].memberName);
                    var memberBalanc3 = $("<td></td>").text(result[i].memberBalance);
                    var memberBalance4 = $("<td></td>").text(result[i].memberAccount);

                    tr.append(memberId);
                    tr.append(memberName);
                    tr.append(memberBalanc3);
                    tr.append(memberBalance4);

                    $("#checkMemberList").append(tr);
                }
            },
            error : function () {
                alert("실패")
            }
        })
    }
