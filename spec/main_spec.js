"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");
var lyric = require("../lib/lyric.js");

describe("根据输入瓶数来唱歌~", function(){
    sinon.spy(console, 'log');

    it("不输入瓶数，输出空字符串", function(){

        var result = main();
        var expect_string = '';
        
        expect(expect_string).to.equal(result);
    });

    it("输入瓶数99，应输出一首完整的歌谣",() =>{

        var result = main(99);

        expect(lyric()).to.equal(result);
    });
});