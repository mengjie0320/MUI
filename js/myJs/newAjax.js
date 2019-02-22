var path = "http://39.106.9.2/AT/admin.php/Home/";
// var path = "http://192.168.216.8/AT/admin.php/Home/"; //本地电脑IP
var showError = function(xhr,type,errorThrown) {
	console.log("errorType: " + type);
}
var newAjax = function (method, url, params, uploadFile, callback) {
	// console.log(method, url, data, uploadFile, callback);
	// console.log(path+url);
	if (uploadFile) {
		mui.ajax(path + url,{
			data: params,
			dataType:'json',//服务器返回json格式数据
			type: method,//HTTP请求类型
			// timeout: 10000,//超时时间设置为10秒
			crossDomain: true,
			contentType: false,   // formData作为data数据传递
			processData: false,
			success: function(data){
				callback(data);
			},
			error:function(xhr,type,errorThrown){
				showError(xhr,type,errorThrown);
			}
		});
	} else {
		mui.ajax(path + url,{
			data: params,
			dataType:'json',//服务器返回json格式数据
			type: method,//HTTP请求类型
			// timeout: 10000,//超时时间设置为10秒
			crossDomain: true,
			success: function(data){
				callback(data);
			},
			error:function(xhr,type,errorThrown){
				showError(xhr,type,errorThrown);
			}
		});
	}
}

// 遮罩
			var mask = mui.createMask(maskResponse);//callback为用户点击蒙版时自动执行的回调；
			var maskResponse = function () {}
