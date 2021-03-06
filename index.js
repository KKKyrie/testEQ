var KTest = function() {

	// questions
	this.questions = [
		'我很容易察觉是不是有人想要加入讨论之中',
		'比起人类我更喜欢动物',
		'我试着跟上潮流',
		'我觉得向别人解释自己很容易理解的事情很困难',
		'大多数夜晚我都会做梦',
		'我很擅长关心别人',
		'比起和别人讨论工作我更喜欢自己解决自己的问题',
		'我不擅长处理社交出现的状况',
		'早上第一件事我总能做的最好',
		'常有人说我在讨论中的发言容易偏离主题',
		'我并不觉得和朋友约会迟到是多大的事',
		'朋友和亲人对我来说太麻烦以至于我不喜欢去打扰他们',
		'我从不违反法律，不管多小的事',
		'我常常很难去判断一件事情是粗鲁或是礼貌的',
		'在讨论中，我倾向于关注自己的观点而不在乎听者的想法',
		'相比于言语上的调侃我更喜欢肢体上的恶作剧',
		'我会更愿意关注眼前的生活而不过多谈未来',
		'小时候，我喜欢切断小虫子来看看有什么事情发生',
		'我能很快发现别人词非达意',
		'我有很强的道德观',
		'我很难理解别人常被各种事情烦心',
		'我很容易做到换位思考',
		'我认为父母应该教给小孩的是好习惯',
		'我容易一时冲动做些什么',
		'我很擅长预测别人的感受',
		'我能很快发现有人在团队中觉得不自在',
		'当我说一件事情而别人生气了，我觉得是他们的问题而不是我的',
		'如果有人问我他的发型如何，即便是我不喜欢我也会说实话',
		'我不能理解为什么有人经常被评论激怒',
		'人们常常觉得我是非常难以预测的',
		'我很享受在社会交际中成为关注的焦点',
		'看见别人哭不会让我觉得难过',
		'我喜欢谈论政治',
		'我直率的表现有人觉得是粗鲁，即使我觉得很多时候是无心的',
		'我不为我的社交状况感到困惑',
		'人们觉得我很善解人意',
		'和别人交谈的时候，我更倾向谈论别人的经历而不是自己的',
		'看到受伤的动物时，我会觉得很难过',
		'我能在不影响别人感受的情况下做决定',
		'在我所计划的事情完成之前我不会放松',
		'我很容易察觉别人对我所说的话是否感兴趣',
		'当看到新闻中有人受伤时，我会难过',
		'我很能理解人，朋友们常常愿意跟我说他们的问题',
		'即使没有人告诉我，我也能感觉到自己是不是有侵略性的',
		'我很容易有新的爱好，不过很快就厌倦它们开始了别的事情',
		'有时有人会说我爱整恶作剧',
		'我很害怕坐大型过山车',
		'我不清楚他们为什么这样说，很多人说我是个迟钝冷漠的人',
		'如果有陌生人想要加入一个群体，我认为应该由他们主动做出努力来融入',
		'看电影的时候，我的情感不容易和剧情纠结在一起',
		'我每天的生活都过的有条不紊，经常事先做好计划',
		'我能凭直觉快速的了解一个人的感觉',
		'我不喜欢冒险',
		'我很容易了解别人可能要说些什么',
		'我可以辨别出别人是不是在伪装自己的真实情感',
		'在做决定之前，我会先权衡利弊',
		'我不会有意识的制定人际规定',
		'我很擅长预测别人会做些什么',
		'我很容易情绪化的处理朋友的问题',
		'我常常赞赏其他人的观点，即使我并不是那么同意'
	];

	// flag
	this.current = 0;

	this.$questionObj = $('#question');

	this.$rank = $('#rank');

	this.score = 0;


};


KTest.prototype = {

	init: function() {
		var that = this;

		$('.weui-btn-area').on('click', function(e){
			e.stopPropagation();
			var _className = e.target.className;
			var className = _className.substr(9, 16);
			if (className == 'weui-btn_default'){
				that._next();
			}else{
				console.log(_className);
				return;
			}
		});


		$('.weui-btn_primary').on('click', function() {
			that._reset();
		});

	},


	_next: function() {
		this.current++;

		if (this.current > 59) {
			this._showResult();
			return;
		}

		this._changeText();

		this._showProgress();

		this._bindEvent();
	},

	_changeText: function() {

		var flag = this.current;

		var q = this.questions[flag];

		this.$questionObj.text(q);
	},

	_bindEvent: function() {

		var that = this;

		// remove all event listener
		$('.weui-btn_default').off('click');


		/*
			type_1
			yes: +2
			agree: +1
		*/
		var type_1 = [1, 6, 19, 22, 25, 26, 35, 36, 37, 38, 41, 42, 43, 44, 52, 54, 55, 57, 58, 59, 60];


		/*
			type_2
			no: +2
			disagree: +1
		*/
		var type_2 = [4, 8, 10, 11, 12, 14, 15, 18, 21, 27, 28, 29, 32, 34, 39, 46, 48, 49, 50];



		if (type_1.indexOf(that.current + 1) > -1) {

			$('.yes').on('click', function() {
				that._plusTwice();
			});

			$('.agree').on('click', function() {
				that._plusOnce();
			})

		} else if (type_2.indexOf(that.current + 1) > -1) {

			$('.no').on('click', function() {
				that._plusTwice();
			});

			$('.disagree').on('click', function() {
				that._plusOnce();
			});

		}
	},

	_plusOnce: function() {
		this.score += 1;
	},

	_plusTwice: function() {
		this.score += 2;
	},

	_showResult: function() {

		var score = this.score;
		var result = '';

		if (score < 33) {
			result = '我的天，你的情商低于平均水平。';
		} else if (score < 53) {
			result = '你的情商处于平均水平';
		} else if (score < 64) {
			result = '你的情商较高';
		} else {
			result = '我的天，你有超高的情商！'
		}

		this.$questionObj.text(result);
		$('.weui-btn_primary').show();
		$('.weui-btn_default').hide();

		console.log(this.score);
		console.log(this.current);

	},

	_showProgress: function() {
		var current = this.current + 1;
		var percent = ((current / 60) * 100).toFixed(2);

		this.$rank.text(current.toString());

		var str = percent + '%';
		$('.js_progress').css({
			width: str
		});
	},

	_reset: function() {
		var that = this;
		this.current = 0;
		$('.weui-btn_primary').hide();
		$('.weui-btn_default').show();
		$('.js_progress').css({
			width: '0%'
		});
		this.score = 0;
		this.$questionObj.text(that.questions[0]);
		this.$rank.text('1');
	}


};



$(function() {

	var ktest = new KTest();
	ktest.init();

});