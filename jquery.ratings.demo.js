
$(function() {
	
	var staff1 = Array();
	
	var staff2 = Array();
		
	var staff3 = Array();
		
	var staff4 = Array();
		
	var staff5 = Array();
		
	var staff6 = Array();
		
	var staff7 = Array();
		
	var staff8= Array();
	$('#state-toggler').on('click', function () {
		var elm = $('#ratings-2');
		var enabled = elm.ratings('get', 'enabled');
		var state = (enabled === true) ? 'disable' : 'enable';
		var label = (enabled === true) ? 'enable' : 'disable';

		elm.ratings(state);
		$(this).text(label);
	});

	$('#max-toggler').on('click', function () {
		var elm = $('#ratings-1');
		var max = elm.ratings('get', 'max');
			max = (max === 5) ? 10 : 5;

		var lbl = (max === 10) ? 5 : 10;

		elm.ratings('max', max);
		$(this).text('max ' + lbl);
	});

	$('#val-toggler').on('click', function () {
		var elm = $('#ratings-1');
		var val = elm.ratings('get', 'value');
			val = (val === 5) ? 0 : 5;

		var lbl = (val === 0) ? 5 : 0;

		elm.ratings('value', val);
		$(this).text('value ' + lbl);
	});

	$('#ratings-1').on('ratings:change', function (e, v) {

	
		var ratingLbl = $('#ratings-1').parents().find('#rating-text1');

	if (ratingLbl.length > 0) {

		var rated=$('#ratings-1').ratings('get', 'value').toFixed(2);
	
		ratingLbl.text($('#ratings-1').ratings('get', 'value').toFixed(2));

		staff1.push(rated);
		var sum=0;
		for(var i=0;i<staff1.length;i++){
			sum+=parseInt(staff1[i]);	
		}
		var  Average=sum/staff1.length;
		$(this).parents().find('#rating-text1').text(Average.toFixed(2));

	}
		
	});

//-------------------------------------------

	$('#ratings-2').on('ratings:change', function (e, v) {
	
		$(this).parents().find('#rating-text2').text(v);
		var ratingLbl = $('#ratings-2').parents().find('#rating-text2');
	if (ratingLbl.length > 0) {
		var rated=$('#ratings-2').ratings('get', 'value').toFixed(2);
		ratingLbl.text($('#ratings-2').ratings('get', 'value').toFixed(2));
		staff2.push(rated);
		var sum=0;
		for(var i=0;i<staff2.length;i++){
			sum+=parseInt(staff2[i]);	
		}
		var  Average=sum/staff2.length;
		
		$(this).parents().find('#rating-text2').text(Average.toFixed(2));
		
	}
		
	});
//---------------------------------------------
	$('#ratings-3').on('ratings:change', function (e, v) {
	
		$(this).parents().find('#rating-text3').text(v);
		var ratingLbl = $('#ratings-3').parents().find('#rating-text3');
	if (ratingLbl.length > 0) {
		var rated=$('#ratings-3').ratings('get', 'value').toFixed(2);
		ratingLbl.text($('#ratings-3').ratings('get', 'value').toFixed(2));
		staff3.push(rated);
		var sum=0;
		for(var i=0;i<staff3.length;i++){
			sum+=parseInt(staff3[i]);	
		}
		var  Average=sum/staff3.length;
		
		$(this).parents().find('#rating-text3').text(Average.toFixed(2));
		
	}
		
	});


//--------------------------------------
	
	$('#ratings-4').on('ratings:change', function (e, v) {
		
		$(this).parents().find('#rating-text4').text(v);
		var ratingLbl = $('#ratings-4').parents().find('#rating-text4');
	if (ratingLbl.length > 0) {
		var rated=$('#ratings-4').ratings('get', 'value').toFixed(2);
		ratingLbl.text($('#ratings-4').ratings('get', 'value').toFixed(2));
		staff4.push(rated);
		var sum=0;
		for(var i=0;i<staff4.length;i++){
			sum+=parseInt(staff4[i]);	
		}
		var  Average=sum/staff4.length;
		
		$(this).parents().find('#rating-text4').text(Average.toFixed(2));
		
	}
		
	});
//----------------------------

	$('#ratings-5').on('ratings:change', function (e, v) {
	
		$(this).parents().find('#rating-text5').text(v);
		var ratingLbl = $('#ratings-5').parents().find('#rating-text5');
	if (ratingLbl.length > 0) {
		var rated=$('#ratings-5').ratings('get', 'value').toFixed(2);
		ratingLbl.text($('#ratings-5').ratings('get', 'value').toFixed(2));
		staff5.push(rated);
		var sum=0;
		for(var i=0;i<staff5.length;i++){
			sum+=parseInt(staff5[i]);	
		}
		var  Average=sum/staff5.length;
		$(this).parents().find('#rating-text5').text(Average.toFixed(2));
		
	}
		
	});
//------------------

//----
$('#ratings-6').on('ratings:change', function (e, v) {

	$(this).parents().find('#rating-text6').text(v);
	var ratingLbl = $('#ratings-6').parents().find('#rating-text6');
if (ratingLbl.length > 0) {
	var rated=$('#ratings-6').ratings('get', 'value').toFixed(2);
	ratingLbl.text($('#ratings-6').ratings('get', 'value').toFixed(2));
	staff6.push(rated);
	var sum=0;
	for(var i=0;i<staff6.length;i++){
		sum+=parseInt(staff6[i]);	
	}
	var  Average=sum/staff6.length;
	
	$(this).parents().find('#rating-text6').text(Average.toFixed(2));
	
}
	
});
//--
$('#ratings-7').on('ratings:change', function (e, v) {

	$(this).parents().find('#rating-text7').text(v);
	var ratingLbl = $('#ratings-7').parents().find('#rating-text7');
if (ratingLbl.length > 0) {
	var rated=$('#ratings-7').ratings('get', 'value').toFixed(2);
	ratingLbl.text($('#ratings-7').ratings('get', 'value').toFixed(2));
	staff7.push(rated);
	var sum=0;
	for(var i=0;i<staff7.length;i++){
		sum+=parseInt(staff7[i]);	
	}
	var  Average=sum/staff7.length;
	
	$(this).parents().find('#rating-text7').text(Average.toFixed(2));
	
}
	
});

//--
$('#ratings-8').on('ratings:change', function (e, v) {
	
	$(this).parents().find('#rating-text8').text(v);
	var ratingLbl = $('#ratings-8').parents().find('#rating-text8');
if (ratingLbl.length > 0) {
	var rated=$('#ratings-8').ratings('get', 'value').toFixed(2);
	ratingLbl.text($('#ratings-8').ratings('get', 'value').toFixed(2));
	staff8.push(rated);
	var sum=0;
	for(var i=0;i<staff8.length;i++){
		sum+=parseInt(staff8[i]);	
	}
	var  Average=sum/staff8.length;
	
	$(this).parents().find('#rating-text8').text(Average.toFixed(2));
	
}
	
});


});