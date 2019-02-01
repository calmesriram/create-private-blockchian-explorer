

var provider = 'http://18.224.59.176:8545'; //Your Infura Endpoint
      var web3Provider = new Web3.providers.HttpProvider(provider);
      var web3 = new Web3(web3Provider);
var latestBlock = web3.eth.blockNumber;

      for (var i = 0; i < 11; i++) {
        // $("#tbody").html('');
        var block = web3.eth.getBlock(latestBlock - i);
        var currblock = block.difficulty.c[0]/1000;        
        var number = block.number;
        var hash = block.hash;
        var time = block.timestamp;
        var gas = block.gasUsed;
        var size = block.size/1000;
        var data = block.extraData;
        document.getElementById('currblock').innerHTML = currblock+' K';
        document.getElementById('currdiff').innerHTML = number;
        // console.log(block)
        // console.log(currblock)
        //var sender = web3.eth.getTransaction(hash.from);
var hours,minutes,seconds,arr;
        var el = '.timer';
var start = 1385132831,
    cDisplay = $(el);
var format = function (t) {
     hours = Math.floor(t / 3600),
        minutes = Math.floor(t / 60 % 60),
        seconds = Math.floor(t % 60),
        arr = [];
    if (hours > 0) {
        arr.push(hours == 1 ? '1 hr' : hours + 'hrs');
    }
    if (minutes > 0 || hours > 0) {
        arr.push(minutes > 1 ? minutes + ' mins' : minutes + ' min');
    }
    if (seconds > 0 || minutes > 0 || hours > 0) {
        arr.push(seconds > 1 ? seconds + ' secs' : seconds + ' sec');
    }   
    
  //  cDisplay.html(minutes);    
};
// setInterval(function () {
//     format(new Date().getTime() / 1000 - time);
// }, 1000);
  format(new Date().getTime() / 1000 - time);





        convertTimestamp(time);
function convertTimestamp(time) {
            var d = new Date(time * 1000), // Convert the passed timestamp to milliseconds
                yyyy = d.getFullYear(),
                mm = ('0' + (d.getMonth() + 1)).slice(-2),  // Months are zero based. Add leading 0.
                dd = ('0' + d.getDate()).slice(-2),         // Add leading 0.
                hh = d.getHours(),
                h = hh,
                min = ('0' + d.getMinutes()).slice(-2),     // Add leading 0.
                ampm = 'AM',
                time;
if (hh > 12) {
                h = hh - 12;
                ampm = 'PM';
            } else if (hh === 12) {
                h = 12;
                ampm = 'PM';
            } else if (hh == 0) {
                h = 12;
            }

            time1 = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
            return time1;
        }
    
        $("#tbody").append('<tr>  <td><button type="submit" class="btn btn-sm btn-my" onclick="myblock('+number+',`'+hash+'`,'+time+','+size+',`'+data+'`,'+currblock+')">' + number + '</button></td> <td><button type="submit"  class="btn btn-sm btn-my2" data-toggle="modal" data-target="#myModal"  onclick="myhash(`'+hash+'`)">' + hash + '</button></td> <td>'+size+" Kb"+'</td> <td> '+minutes+"Min "+seconds+" Sec ago" +' </td> </tr>')
      }
    
    // setInterval(main,10000)
// Block Number	276305
// Block Hash	0x41bdb87044f7b49ec6be0155c3082ee0ab0b4d4b8baf209dcbb808b1a7e128cc
// Received Time	Fri, 01 Feb 2019 09:35:11 GMT

      function myblock(num,hash,time,size,data,currblock){
localStorage.clear();
        console.log(num)
        console.log(hash)
        console.log(time)
        console.log(size)
        console.log(data)
        // var date = new Date(time)
      
        localStorage.setItem('bknum',num)
        localStorage.setItem('bkhash',hash)
        localStorage.setItem('bktme',time)
        localStorage.setItem('bksze',size)
        localStorage.setItem('bkdata',data)
     
        localStorage.setItem('bkdiff',currblock)
           window.location.href='blockchain.explorer2.html';
      }
      function myhash(hash){
     document.getElementById('mbdy').innerHTML = hash;
    }

      function dataload(){
     let bknum =    localStorage.getItem('bknum')
     let bkhash =  localStorage.getItem('bkhash')
     let bktme  = localStorage.getItem('bktme')
    //  let bkconfms  =  localStorage.getItem('bkconfms')
     let bkdiff  = localStorage.getItem('bkdiff')
     let bksze  = localStorage.getItem('bksze')
     let bkdata  = localStorage.getItem('bkdata')
    //  var btime = 
     var date = new Date(parseInt(bktme));
     console.log(date)
        document.getElementById('bknum').innerHTML = bknum;
        document.getElementById('bkhash').innerHTML = bkhash;
        document.getElementById('bktime').innerHTML =  date;
        // document.getElementById('bkconfms').innerHTML = bkconfms;
        document.getElementById('bkdiff').innerHTML = bkdiff;
        document.getElementById('bksze').innerHTML = bksze;
        document.getElementById('bkdata').innerText = bkdata;

      }

      function getdetails(){
          var blocknumberhash = document.getElementById('srch').value;
        web3.eth.getBlock(blocknumberhash,function(err,data){
            if(data)
            {
                      localStorage.clear();
        localStorage.setItem('bknum',data.number)
        localStorage.setItem('bkhash',data.hash)
        localStorage.setItem('bktme',data.timestamp)
        localStorage.setItem('bkdiff',data.difficulty.c[0]/1000)
        localStorage.setItem('bksze',data.size)
        localStorage.setItem('bkdata',data.extraData)
        window.location.href='blockchain.explorer2.html';
                // console.log(data)
            }
        })
    }
    function cleardetails(){
        localStorage.clear();
    }

