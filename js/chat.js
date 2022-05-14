function bot_ui_ini() {
    var botui = new BotUI("hello-xiaoxiao");
    botui.message.add({delay: 800, content: "你好,朋友!"}).then(function () {
        botui.message.add({delay: 1100, content: "这里是小小(,,･∀･)ﾉ゛hello"}).then(function () {
            botui.message.add({delay: 1100, content: "一个奇怪的男孩儿"}).then(function () {
                botui.action.button({
                    delay: 1600,
                    action: [{text: "然后呢?哈哈哈", value: "sure"}, {text: "少废话!", value: "skip"}]
                }).then(function (a) {
                    "sure" == a.value && sure();
                    "skip" == a.value && end()
                })
            })
        })
    });
    var sure = function () {
        botui.message.add({delay: 1600, content: "那好,请听我慢慢讲"}).then(function () {
            secondpart()
        })
    }, end = function () {
        botui.message.add({
            delay: 1600,
            content: "![...](https://figurebed-ladidol.oss-cn-chengdu.aliyuncs.com/img/202205131912595.png)"
        })
    }, secondpart = function () {
        botui.message.add({delay: 3000, content: "hello，我是一个在校大学生，现在什么都还不会，还只是个初学者"}).then(function () {
            botui.message.add({delay: 2500, content: "现在在cuit的回声实验室里"}).then(function () {
                botui.message.add({delay: 2200, content: "希望我能在这里学到点东西"}).then(function () {
                    botui.message.add({
                        delay: 2500,
                        content: "其实我也很贪玩，平时喜欢王者，无聊还喜欢看电影"
                    }).then(function () {
                        botui.message.add({
                            delay: 2500,
                            content: "说到看电影，我什么类型的电影都看的，你可以看看我博客上的电影介绍页（如果感兴趣的话）"
                        }).then(function () {
                            botui.message.add({delay: 2500, content: "最近也缺电影看，请问你有好看的电影吗，可以推荐一下吗q(≧▽≦q)"}).then(function () {
                                botui.action.button({
                                    delay: 1000,
                                    action: [{
                                        text: "然后呢?",
                                        value: "sure"
                                    }, {
                                        text: "少废话!",
                                        value: "skip"
                                    }
                                    ]
                                }).then(function (a) {
                                    thirdpart()
                                })
                            })
                        })
                    })
                })
            })
        })
    }, thirdpart = function () {
        botui.message.add({delay: 2000, content: "我还喜欢听音乐，音乐在我上学的大部分时间里陪伴着我，我也感觉很快乐"}).then(function () {
            botui.action.button({delay: 2500, action: [{text: "你喜欢听什么类型的呢？", value: "why-cat"}]}).then(function (a) {
                fourthpart()
            })
        })
    }, fourthpart = function () {
        botui.message.add({delay: 2000, content: "我也是随意的，啥子类型都听听，我一直都觉得，情歌都很好听，只是听的话太容易共情了"}).then(function () {
            botui.message.add({delay: 2000, content: "所以呢，我也经常听rap，电音啥的，纯音乐在学习安静的时候喜欢听"}).then(function () {
                botui.action.button({
                    delay: 1500,
                    action: [{text: "哈哈哈哈", value: "why-domain"}]
                }).then(function (a) {
                    fifthpart()
                })
            })
        })
    }, fifthpart = function () {
        botui.message.add({delay: 1e3, content: "哈哈哈哈~很高兴见到你！"}).then(function () {
            botui.message.add({delay: 1600, content: "我们下次在见咯，欢迎常来我博客做客哦^_^"})
        })
    }
}