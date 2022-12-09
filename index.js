var addStaffMove=document.querySelector('.add-Staff-move');
var boardStaff=document.querySelector('.board-Staff')
var statisitcalContent=document.querySelector('.statisitcal-content')
var addSubmit=document.querySelector('.add-submit')
var tableInfo=document.querySelector('#table-info')
var fullname=document.querySelector('#fullname')
var email=document.querySelector('#email')
var sdt=document.querySelector("#sdt")
var address=document.querySelector('#address')
var cmnd=document.querySelector('#cmnd')
var form=document.querySelector('form')
var checkSeeds=document.querySelector('.check-seed')
var checkWords=document.querySelector('.check-word')
//them nhan vien
addStaffMove.addEventListener('click',function(){
      email.value=' ',fullname.value='',sdt.value='',cmnd.value='',address.value='',
      submitUpdate.style.display="none";
      submitSave.style.display="block";

      statisitcalContent.classList.add('move')
      boardStaff.classList.toggle('move')
      tableInfo.classList.add('move')
      editStaff.classList.add('move')


})

 addSubmit.addEventListener('click',function(){
      // boardStaff.classList.add('move')
      // tableInfo.classList.remove('move')
 })
 //ckeck table
     function showError(input,checkError){
      var parent=input.parentElement;
      var small=parent.querySelector('small')
      small.innerText=`${checkError}`
      small.classList.add('move')
     }
     function showSuccess(input){
      var parent=input.parentElement;
      var small=parent.querySelector('small')
      small.innerText=` `;
      small.classList.remove('move')
     }
     function checkemtyError(listInput){
         let checkemtyErrorXXX=false; 
      listInput.forEach(function(input){
            input.value=input.value.trim(); 
            
            if(!input.value){
                   checkemtyErrorXXX=true;
                  showError(input,'chưa nhập dữ liệu')
            //    small.innerText=`chua nhap du lieu`
            //    small.classList.add('move')
            }else{
                 showSuccess(input)
            }

      })
      return checkemtyErrorXXX;
     }
      

     function checkEmail(email){
      let checkEmailXXX=false;
      var emailcheck=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(emailcheck.test(email.value)){
                  showSuccess(email)
                  console.log('duckodz')
            }else{
                  checkEmailXXX=true;
                  showError(email,'nhập không đúng email')
                  console.log('ducdz')
                  
            }
            return checkEmailXXX;
     }
     function checkSdt(sdt){
      let checkSdtXXX=false;
         var sdtx=sdt.value;
           if(isNaN(sdtx)){
              showError(sdt,'dữ liệu ko chính xac')    
           }else if(sdt.value.length < 10){
            showError(sdt,'dữ liệu ko chính xac ok') 
            checkSdtXXX=true;
            // console.log('ducdz')
          }
          return checkSdtXXX;
     }
     function checkCmnd(cmnd){
          let checkCmndXXX=false;
          var cmndx=cmnd.value.trim();
          if(isNaN(cmndx)){
            showError(cmnd,'dữ liệu ko chính xac') 
          }else if(cmndx.length < 10){
            checkCmndXXX=true;
            showError(cmnd,'dữ liệu ko chính xac ok') 
          }
          return checkCmndXXX;
     }
     var gender=" ";
 var genderNam=document.querySelector('.board-Staff-item #male')
 var genderNu=document.querySelector('.board-Staff-item #famale')
      //   if(genderNam.checked){
      //          gender=`male`
      //   }else{
      //       gender="famale"
      //       console.log('123')
      //   }
        function checkSeed(checkSeeds){
            if(genderNu.checked || genderNam.checked){
                   showSuccess(checkSeeds)
            }else{
                  showError(checkSeeds,'chưa nhập dữ liệu')
            }
            //
            if(genderNam.checked){
                  gender=genderNam.value;
           }else{
               gender=genderNu.value
               console.log('123')
           }
        }
        var kiemtrajob=""
        var jobs=document.querySelector('.board-Staff-item #job')
        var nojobs=document.querySelector('.board-Staff-item #nojob')
        function checkWord(checkWords){
            if(jobs.checked || nojobs.checked){
                  showSuccess(checkWords)
           }else{
                 showError(checkWords,'chưa nhập dữ liệu')
           }
           //
           if(jobs.checked){
               kiemtrajob='làm việc'
            //    tableInfoTR.style.color='#0063c6'
        }else{
               kiemtrajob='nghỉ việc'
            //    tableInfoTR.style.color='red'
             console.log('123')
     }
        }
        var submitSave=document.querySelector('#submit-save')
        submitSave.addEventListener('click',function(e){

       e.preventDefault()
      let checkemtyErrorXXX=checkemtyError([fullname,email,sdt,address,cmnd])
      let checkEmailXXX= checkEmail(email)
       let checkSdtXXX=checkSdt(sdt)
       let checkCmndXXX=checkCmnd(cmnd)
       checkSeed(checkSeeds)
       checkWord(checkWords)
       if(checkemtyErrorXXX || checkEmailXXX || checkSdtXXX || checkCmndXXX){
      //      console.log('ducdz') 
  
       }else{
            boardStaff.classList.add('move')
            tableInfo.classList.remove('move')
                 let listStaffs=localStorage.getItem("list-staffs") ? JSON.parse(localStorage.getItem("list-staffs")) :[];
                  listStaffs.push({
                  email:email.value,
                  fullname :fullname.value,
                  sdt:sdt.value,
                  cmnd:cmnd.value,
                  address:address.value,
                  kiemtrajob:kiemtrajob,
                  gender:gender,
                  
                  })
                 
                 localStorage.setItem("list-staffs",JSON.stringify(listStaffs))
                  
            //      console.log(listStaffs)
                 listMember()
            email.value=' ',fullname.value='',sdt.value='',cmnd.value='',address.value=''
           
            console.log(Staffs) 
       }
       
 })
  

 function listMember(){
      var inforMember=document.querySelector('.infor-Member')
      var trs=`
      <tr>   
      <th>Họ Và Tên</th>
      <th>địa Chỉ Email </th>
      <th>Số điện Thoại</th>
      <th>Địa Chỉ</th>
      <th>Số CMND</th>
      <th>Tình Trạng</th>
      <th>giới tính</th>
      </tr>`;  
      var edits=`
      <tr>   
      <th>Họ Và Tên</th>
      <th>địa Chỉ Email </th>
      <th>Số điện Thoại</th>
      <th>Địa Chỉ</th>
      <th>Số CMND</th>
      <th>Tình Trạng</th>
      <th>giới tính</th>
      <th>hanh dong</th>
      </tr>`;  
      let listStaffs=localStorage.getItem("list-staffs") ? JSON.parse(localStorage.getItem("list-staffs")) :[];
      console.log(listStaffs)
      
      listStaffs.map(function(add,stt){
            trs+=`
            <tr>
            <td>${add.fullname}</td>
            <td>${add.email}</td>
            <td>${add.sdt}</td>
            <td>${add.address}</td>
            <td>${add.cmnd}</td>
            <td class="green">${add.kiemtrajob}</td>
            <td>${add.gender}</td>
            
            </tr>`

      //   inforMember.appendChild(trs)
      // console.log(stt++)
      })
      listStaffs.map(function(add,stt){
            let staffStt=stt;
            stt++;
            let total=stt;
            edits+=`
            <tr>
            <td>${add.fullname}</td>
            <td>${add.email}</td>
            <td>${add.sdt}</td>
            <td>${add.address}</td>
            <td>${add.cmnd}</td>
            <td class="green">${add.kiemtrajob}</td>
            <td>${add.gender}</td>
            <td>
            <a href="#" onclick='SuaStaff(${staffStt})' >Edit</a> | <a href="#" onclick='DeleteStaff(${staffStt})'>Xoa</a>

          </td>
            </tr>`
            
             
      console.log(stt++)
      totalSraffs(total)
       })
       inforMember.innerHTML=trs;

       editStaff.innerHTML=edits;
      }
     
       
      
      // var checkjob=document.querySelector("addinfors")
      // console.log(checkjob)
      // if(checkjob.value=='lam viev'){
      //       tableInfoTR.style.color='#0063c6'
      //  }else{
      //       tableInfoTR.style.color='red'
      //  }
      // console.log(trs);
 
 
//  var tableInfoTR=document.querySelector('#table-info tr .green')
 

  var Staffs=[];
  Staffs.push({
      email:email.value,
      fullname :fullname.value,
      sdt:sdt.value,
      cmnd:cmnd.value,
      address:address.value,
      gender:gender,

      })
     //tim kiem thong tin nhan vien
     var inforStaff=document.querySelector('.infor-staff')
     inforStaff.addEventListener('click',function(){
      statisitcalContent.classList.add('move')
      tableInfo.classList.remove('move')  
      
     })
     //click thong ke nhan su
   var statisitcalText=document.querySelector('.statisitcal-text');
   statisitcalText.addEventListener('click',function(){
      statisitcalContent.classList.toggle('move')
      editStaff.classList.add('move')
   })
   //edit nhan vien
   var Timekeeping=document.querySelector('.Timekeeping')
   var editStaff=document.querySelector('.edit-staff');
   Timekeeping.addEventListener('click',function(){
      statisitcalContent.classList.add('move')
      editStaff.classList.remove('move')
      tableInfo.classList.add('move')
      boardStaff.classList.add('move')
   })
   //xoa nv
   function DeleteStaff(staffStt){
      let listStaffs=localStorage.getItem("list-staffs") ? JSON.parse(localStorage.getItem("list-staffs")) :[];
      listStaffs.splice(staffStt,1);
      localStorage.setItem('list-staffs',JSON.stringify(listStaffs))
      listMember()
            console.log(staffStt)
}
   //sua nv
   function SuaStaff(staffStt){
      boardStaff.classList.remove('move')
     var submitUpdate=document.querySelector('#submit-update');
     submitUpdate.style.display="block";
      submitSave.style.display="none";
      let listStaffs=localStorage.getItem("list-staffs") ? JSON.parse(localStorage.getItem("list-staffs")) :[];
      document.querySelector('#index').value=staffStt;
      
      fullname.value=listStaffs[staffStt].fullname;
      email.value=listStaffs[staffStt].email;
      sdt.value=listStaffs[staffStt].sdt;
      address.value=listStaffs[staffStt].address;
      cmnd.value=listStaffs[staffStt].cmnd;
      kiemtrajob=listStaffs[staffStt].kiemtrajob;
      if(kiemtrajob==='làm việc'){
            jobs.click()
      }else{
            nojobs.click()
      }
      gender=listStaffs[staffStt].gender;
      console.log(gender)
      
      if(gender==='Nam'){

            console.log('duxdz')
            genderNam.click();
      }else{
            genderNu.click();
      }

      console.log(listStaffs[staffStt])
      
       
   }
   var submitUpdate=document.querySelector('#submit-update');
   submitUpdate.addEventListener('click',function(e){
      boardStaff.classList.add ('move')
         e.preventDefault()
      let listStaffs=localStorage.getItem("list-staffs") ? JSON.parse(localStorage.getItem("list-staffs")) :[];
       let index=document.querySelector('#index').value;
          
          if(genderNam.checked){
            gender=genderNam.value;
     }else{
         gender=genderNu.value
         console.log('123')
     }
     if(jobs.checked){
      kiemtrajob='làm việc'
    
     }else{
      kiemtrajob='nghỉ việc'
     }
      listStaffs[index]={
            fullname:fullname.value,
            email:email.value,
            sdt:sdt.value,
            address:address.value,
            cmnd:cmnd.value,
            kiemtrajob:kiemtrajob,
            gender:gender,
         }
         localStorage.setItem("list-staffs",JSON.stringify(listStaffs))
         listMember();
   })
   //tong so nhan vien
var statisitcalChuItem=document.querySelector('.statisitcal-chu-item span')
function totalSraffs(total){
      statisitcalChuItem.innerHTML=total;
}
//load trang web
   var headerTrangChu=document.querySelector('.home-page')
   headerTrangChu.addEventListener('click',function(){
      location.reload();
   })
   //quan ly luong
   var wagelist=document.querySelector('.wage-list')
   var tableSalary=document.querySelector('.table-salary')
   var li6=document.querySelector('.li6')
   var arrowRight=document.querySelector('.wage-arrow')
   var arrowRight1=document.querySelector('.wage-arrow1')
   wagelist.addEventListener('click',function(){
      tableSalary.classList.toggle('move')
      arrowRight.classList.toggle('move')
      arrowRight1.classList.toggle('move')
   })