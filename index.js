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
var addStaffMoves=document.querySelectorAll('.add-staff-item');

     addStaffMoves.forEach(function(stt){
      addStaffMoves[0].addEventListener('click',function(){
         boardStaff.classList.toggle('move')
      })
      addStaffMoves[1].addEventListener('click',function(){
         editStaff.classList.toggle('move')
      })

      stt.addEventListener('click',function(){
         boardStaff.classList.add('move')
         editStaff.classList.add('move')
      })
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
                var abc={
                  email:email.value,
                  fullname :fullname.value,
                  sdt:sdt.value,
                  cmnd:cmnd.value,
                  address:address.value,
                  kiemtrajob:kiemtrajob,
                  gender:gender,
                  
                  }
                 listStaffs.push(abc)
                 localStorage.setItem("list-staffs",JSON.stringify(listStaffs))
                 listMember()
            email.value=' ',fullname.value='',sdt.value='',cmnd.value='',address.value=''
           
            console.log(Staffs) 
           
            TestStaff()
            loading()
       }
       
 })
  
 function listMember(){
   qwert()
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
            <a href="#" class="style-SuaStaff" onclick='SuaStaff(${staffStt})' >Sửa</a> | <a  class="style-DeleteStaff" href="#" onclick='DeleteStaff(${staffStt})'>Xóa</a>
            
          </td>
            </tr>`
      totalSraffs(total)
       })
       inforMember.innerHTML=trs;

       editStaff.innerHTML=edits;
       TestStaff();
      
      }
     
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
      reloads()
   })
   //edit nhan vien
   var Timekeeping=document.querySelector('.Timekeeping')
   var editStaff=document.querySelector('.edit-staff');
   Timekeeping.addEventListener('click',function(){
      statisitcalContent.classList.add('move')
      editStaff.classList.remove('move')
      tableInfo.classList.add('move')
      boardStaff.classList.add('move')
      loading()
   })
   //xoa nv
   function DeleteStaff(staffStt){
      let listStaffs=localStorage.getItem("list-staffs") ? JSON.parse(localStorage.getItem("list-staffs")) :[];
      listStaffs.splice(staffStt,1);
      localStorage.setItem('list-staffs',JSON.stringify(listStaffs))
             listMember()
            console.log(staffStt)
            TestStaff()
            loading()
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
      
      TestStaff()
      loading()
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
         loading()
   })
   //tong so nhan vien
var statisitcalChuItem=document.querySelector('.statisitcal-chu-item span')
function totalSraffs(total){
      statisitcalChuItem.innerHTML=total;
}
//load trang web
   var headerTrangChu=document.querySelector('.home-page')
   headerTrangChu.addEventListener('click',function(){
      loading()
       reloads()

   })
   function reloads(){
      location.reload();
   }
   //quan ly luong
   var wagelist=document.querySelector('.wage-list')
   var tableSalary=document.querySelector('.table-salary')
   var li6=document.querySelector('.li6')
   var arrowRight=document.querySelector('.wage-arrow')
   var arrowRight1=document.querySelector('.wage-arrow1')
   wagelist.addEventListener('click',function(){
      listWage()
      tableSalary.classList.toggle('move')
      arrowRight.classList.toggle('move')
      arrowRight1.classList.toggle('move')
   })
   //quan ly cong tac
   var menuWord=document.querySelector('.menu-word');
   var menuIconLeft=document.querySelector('.menu-icon-left')
   var menuIconBottom=document.querySelector('.menu-icon-bottom')  
   var menuWordList=document.querySelector('.menu-word-list')
    menuWord.addEventListener('click',function(){
      menuWordList.classList.toggle('move')
      menuIconLeft.classList.toggle('move')
      menuIconBottom.classList.toggle('move')
   })
   //quan ly nhan vien
   var staffName=document.querySelector('.staff-name');
   var staffItem=document.querySelector('.staff-item')
   var arrowRight2=document.querySelector('.wage-arrow2')
   var arrowRight3=document.querySelector('.wage-arrow3')
   staffName.addEventListener('click',function(e){
      staffItem.classList.toggle('move')
      arrowRight2.classList.toggle('move')
      arrowRight3.classList.toggle('move')
      
   })
   //menu nhom nhan vien
   var menuStaffGroupLeft=document.querySelector('.menu-Staff-group-left')
   var menuStaffGroupBottom=document.querySelector('.menu-Staff-group-bottom')
   var menuStaffGroup=document.querySelector('.menu-Staff-group')
   var menuStaffGroupList=document.querySelector('.menu-Staff-group-list')
   menuStaffGroup.addEventListener('click',function(e){
      menuStaffGroupList.classList.toggle('move')
      menuStaffGroupLeft.classList.toggle('move')
      menuStaffGroupBottom.classList.toggle('move')
      
   })
   // them nhom nhan vien
   var StaffGroupItem=document.querySelector('.Staff-group-item')
   var tableTaffTeams=document.querySelector('.table-taffTeams ')
   StaffGroupItem.addEventListener('click',function(e){
      tableTaffTeams.classList.toggle('move')
      tableTaffTeamsALL.classList.add('move')
      e.stopPropagation()
   })
   //bang nhom nhan vien
   var tableTaffTeamsALL=document.querySelector('.table-taffTeamsALL')
    var btnTableTaffTeams=document.querySelector('.btn-table-taffTeams')
    var tableTaffTeamsName=document.querySelector('#table-taffTeams-name')
    var tableTaffTeamsDate=document.querySelector('#table-taffTeams-date')
    var tableTaffTeamsALLMenu=document.querySelector('.table-taffTeamsALL-menu')
         btnTableTaffTeams.addEventListener('click',function(){
            tableTaffTeamsALL.classList.remove('move')
            var tableTaffTeamsARR=[];
            tableTaffTeamsARR.push({
               tableTaffTeamsName:tableTaffTeamsName.value,
               tableTaffTeamsDate:tableTaffTeamsDate.value,
            })
            console.log(tableTaffTeamsARR)
            tableTaffTeamsARR.forEach(function(stt){
               console.log(stt)
               var tableTaffTeamsALLMenu=document.querySelector('.table-taffTeamsALL-menu')
               let div=document.createElement('div');
               div.classList.add('table-taffTeamsALL-content')
               div.innerHTML=`
                                <div class="table-taffTeamsALL-list">
                                <div class="table-taffTeamsALL-item">
                                  <span>${stt.tableTaffTeamsName}</span>
                                  <p>thông tin</p>
                                </div>
                                <i class="fa-solid fa-users-line"></i>
                            </div>
                            <div class="table-taffTeamsALL-xoa">
                                <span>xóa nhóm</span>
                            </div>
                           `
                     tableTaffTeamsALLMenu.appendChild(div)      
            })
    
         })
         //danh sach nhom
         var tableAddWord=document.querySelector('.table-add-word')
         tableAddWord.addEventListener('click',function(e){
            e.stopPropagation()
            tableTaffTeamsALL.classList.toggle('move')
         })
   //content
   var content=document.querySelector('.content')
   content.addEventListener('click',function(){
      menuAccount.classList.add('move')
   })
   //menu tai khoan nhan vien
   var menuAccountList=document.querySelector('.menu-account-list')
   var menuAccountBottom=document.querySelector('.menu-account-bottom')
   var menuAccountLeft=document.querySelector('.menu-account-left')
   var menuAccount=document.querySelector('.menu-account ')
   menuAccountList.addEventListener('click',function(e){
      menuAccount.classList.toggle('move')
      menuAccountBottom.classList.toggle('move')
      menuAccountLeft.classList.toggle('move')
      
   })
   //quan ly luong-ds ten nv
   listWage()
   var abc=document.querySelector('.list-name-nv')
   
   function listWage(){
      let listStaffs=localStorage.getItem("list-staffs") ? JSON.parse(localStorage.getItem("list-staffs")) :[];
       var Listnames=` <option value="--chon nhan vien--">--chon nhan vien--</option>`
      var abc=document.querySelector('#list-name-nv-list')
      var abcs=document.querySelector('#list-name-nv-lists')
      listStaffs.forEach(function(data){
          
           Listnames+=`<option value="${data.fullname}">${data.fullname}</option>`
           
      })
      abc.innerHTML=Listnames
      abcs.innerHTML=Listnames
   }
   var tableSalaryTable=document.querySelector('.table-salary-table')
   var tableWage=document.querySelector('.table-wage')
       tableSalaryTable.addEventListener('click',function(e){
         console.log('ducdz')
       tableWage.classList.toggle('move1')
       e.stopPropagation()
   })
   var menuContentLy=document.querySelectorAll('.menu-content li')     
           menuContentLy.forEach(function(stt){
               stt.addEventListener('click',function(e){
                  tableWage.classList.add('move')
                  boardStaff.classList.add('move')
                  editStaff.classList.add('move')
                  tableInfo.classList.add('move')
                 
                  statisitcalContent.classList.remove('move')
                    document.querySelector('.menu-content li.move').classList.remove('move')
                   stt.classList.add('move')
                   tableWage.classList.add('move1')
               })
              
           })
     var payrollList=document.querySelector('.payroll-list');
     var btnWage=document.querySelector('.btn-wage')
     var payroll=document.querySelector('.payroll')

     btnWage.addEventListener('click',function(){
      payrollList.classList.remove('move')
      comeBack.classList.remove('move')

     })
     var tableSalaryCalculate=document.querySelector('.table-salary-calculate')
     tableSalaryCalculate.addEventListener('click',function(){
      payrollList.classList.remove('move')
     })
     //menu-bang-cong-tac
     var btnBussiness=document.querySelector('.btn-bussiness')
     var menuBusinessList=document.querySelector('.menu-business-list');
     var menuBusiness=document.querySelector('.menu-business')
     menuBusinessList.addEventListener('click',function(e){
       e.stopPropagation();
     })
     btnBussiness.addEventListener('click',function(){
      menuBusiness.classList.remove('move')
     })
     menuBusiness.addEventListener('click',function(){
      menuBusiness.classList.add('move')
     })
     //
     payrollList.addEventListener('click',function(){
      payrollList.classList.add('move')
      comeBack.classList.add('move')
     })
     payroll.addEventListener('click',function(e){
       e.stopPropagation()
     })
      
     //menu--nhan vien--them nhanvien
     var menuAddStaff=document.querySelector('.menu-addStaff');
     menuAddStaff.addEventListener('click',function(e){
      boardStaff.classList.toggle('move')
      editStaff.classList.add('move')
      tableInfo.classList.add('move')
      statisitcalContent.classList.add('move')
      e.stopPropagation()
     })
     //menu--nhan vien--sua xoa nhanvien
     var menuEditStaff=document.querySelector('.menu-EditStaff')
     menuEditStaff.addEventListener('click',function(e){
      editStaff.classList.remove('move')
      boardStaff.classList.add('move')
      tableInfo.classList.add('move')
      statisitcalContent.classList.add('move')
      e.stopPropagation()
     })
     //menu--nhan vien--thong tin nhanvien
     
     var menuInfoStaff=document.querySelector('.menu-InfoStaff')
     menuInfoStaff.addEventListener('click',function(e){
      tableInfo.classList.remove('move')
      boardStaff.classList.add('move')
      editStaff.classList.add('move')
      statisitcalContent.classList.add('move')
      e.stopPropagation()
     })
     

     //menu-hieu ung 
     var menuContent=document.querySelector('.menu-content');
     var menuLiStaff=document.querySelector('.menu-li-Staff')
     var wageLi=document.querySelector('.wage')
     menuLiStaff.addEventListener('click',function(e){
        e.stopPropagation()
     })

     wageLi.addEventListener('click',function(e){
        e.stopPropagation()
     })
     menuContent.addEventListener('click',function(){
      staffItem.classList.add('move')
      tableSalary.classList.add('move')
     })
     //bang luong da tinh
     var listNameNvList=document.querySelector('#list-name-nv-list')
     console.log(listNameNvLists)
     var wordDay=document.querySelector('#word-day')
     var allowance=document.querySelector('#allowance')
     var advanceMoney=document.querySelector('#advance-money')
     var dates=document.querySelector('#date')
     var tableWageAdmin=document.querySelector('#table-wage-admin')
     var btnWage=document.querySelector('.btn-wage');
     var tableWageCode=document.querySelector('#table-wage-code')
     var payrollTr=document.querySelector('.payrollTr')
     btnWage.addEventListener('click',function(){
      totalTableWage();
      let TableWages=[]
      TableWages.push({
      tableWageCode:tableWageCode.value,
      listNameNvList:listNameNvList.value,
      wordDay:wordDay.value,
      allowance:allowance.value,
      advanceMoney:advanceMoney.value,
      dates:dates.value,
      tableWageAdmin:tableWageAdmin.value,
     })
   //   console.log(TableWages)
     TableWages.forEach(function(stt){
      payrollTr.innerHTML=`
                           <td>${stt.tableWageCode}</td>
                           <td>${stt.listNameNvList}</td>
                           <td>${stt.wordDay}</td>
                           <td>${stt.allowance}</td>
                           <td>${stt.advanceMoney}</td>
                           <td>${stt.dates}</td>
                           <td>${stt.tableWageAdmin}</td>`
     })
     })
     //bang cong tac nhan vien
     var itemBussinessCode=document.querySelector('#item-bussiness-code')
     var listNameNvLists=document.querySelector('#list-name-nv-lists')
     var bussinessDateBegin=document.querySelector('#bussiness-date-begin')
     var bussinessDateFinish=document.querySelector('#bussiness-date-finish')
     var bussinessPlace=document.querySelector('#bussiness-place')
     var bussinessPurpose=document.querySelector('#bussiness-purpose')
     var btnBussiness=document.querySelector('.btn-bussiness')
     var businessTr=document.querySelector('.businessTr')
     var tableBussinessAdmin=document.querySelector('#table-bussiness-admin')
     btnBussiness.addEventListener('click',function(){
      var TableBussines=[]
      TableBussines.push({
      itemBussinessCode:itemBussinessCode.value,
      listNameNvLists:listNameNvLists.value,
      bussinessDateBegin:bussinessDateBegin.value,
      bussinessDateFinish:bussinessDateFinish.value,
      bussinessPlace:bussinessPlace.value,
      bussinessPurpose:bussinessPurpose.value,
      tableBussinessAdmin:tableBussinessAdmin.value,
     })
     TableBussines.forEach(function(stt){
      businessTr.innerHTML=`
                           <td>${stt.itemBussinessCode}</td>
                           <td>${stt.listNameNvLists}</td>
                           <td>${stt.bussinessDateBegin}</td>
                           <td>${stt.bussinessDateFinish}</td>
                           <td>${stt.bussinessPlace}</td>
                           <td>${stt.bussinessPurpose}</td>
                           <td>${stt.tableBussinessAdmin}</td>`

     })
     console.log(TableBussines)
   })
   
     // bang luong da tinh
   function totalTableWage(){
      var totalTableWage=[]
      var basicSalary=4400000;
      var totalMoney=document.querySelector('.total-money')
      totalTableWage.push({
      wordDay:wordDay.value,
      allowance:allowance.value,
      advanceMoney:advanceMoney.value,
     })
     totalTableWage.forEach(function(stt){
          console.log(stt)
         var totalIncome= basicSalary/26*stt.wordDay-stt.advanceMoney*1000+stt.allowance*1000;
         var qwert=totalIncome.toFixed(0);
         const VND = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          });
          totalMoney.innerHTML=`Tổng thu nhập:  + ${VND.format(qwert)}`
          console.log();
         
     })
   }
   
  // tao so luong nv nghi viec-lam viec
     function TestStaff(){
      let listStaffs=localStorage.getItem("list-staffs") ? JSON.parse(localStorage.getItem("list-staffs")) :[];
      let SttResign=0;
      let SttWord=0;
      var IndexWord=document.querySelector('.IndexWord')
      var indexResign=document.querySelector('.indexResign')
      listStaffs.forEach(function(indexs,stt){
         if(indexs.kiemtrajob=="làm việc"){
            SttResign++;
         }else if(indexs.kiemtrajob=="nghỉ việc"){
            SttWord++;
           
         }
          
          IndexWord.innerHTML=SttResign;
          indexResign.innerHTML=SttWord;
      })
     }
   //loading
   function loading(){
      var loatAll=document.querySelector('.loatAll');
      loatAll.classList.remove('move')
      setTimeout(function(){
         loatAll.classList.add('move')
      },1000);
   }
// search nhan vien
   var bodys=document.querySelector('body')
   searchStaffFunction()
   var listStaffs=localStorage.getItem("list-staffs") ? JSON.parse(localStorage.getItem("list-staffs")) :[];
   console.log(listStaffs)
       function searchStaffFunction(){
         var searchStaffInput=document.querySelector('.searchStaff-list-input input')  
   var listStaffs=localStorage.getItem("list-staffs") ? JSON.parse(localStorage.getItem("list-staffs")) :[];
   
         // listStaffs.push({
         //       email:email.value,
         //       fullname :fullname.value,
         //       sdt:sdt.value,
         //       cmnd:cmnd.value,
         //       address:address.value,
         //       kiemtrajob:kiemtrajob,
         //       gender:gender,
         // })
      
        var searchStaffList=document.querySelector('.searchStaff-list');
        var tableSearchStaff=document.querySelector('#table-searchStaff')
        searchStaffList.addEventListener('click',function(e){
              e.stopPropagation()
        })
        var searchStaff=document.querySelector('.searchStaff');
        searchStaff.addEventListener('click',function(){
             searchStaff.classList.add('active')
        })
        var addStaffSearch=document.querySelector('.add-staff-search')
        addStaffSearch.addEventListener('click',function(e){
               
               loading();
               searchStaff.classList.remove('active')
             e.stopPropagation()
            
        })
        tableSearchStaff.addEventListener('click',function(e){
             e.stopPropagation()
       })

       listStaffs.forEach(function(stt){
         
         var searchStaffItemDIV=document.createElement('div')
         searchStaffItemDIV.classList.add('searchStaff-item')
         var searchInfor=`
                       <span class="searchStaff-item-p">${stt.fullname}</span>
                         `
               searchStaffItemDIV.innerHTML=searchInfor; 
               searchStaffList.appendChild(searchStaffItemDIV)
          searchStaffInput.addEventListener('input',function(e){
                  var txtSearch= e.target.value.trim().toLowerCase();
                 
                  if(stt.fullname.toLowerCase().includes(txtSearch)){
                     searchStaffItemDIV.classList.remove('move')
                  }else{
                     searchStaffItemDIV.classList.add('move')
                  }
           })
         
          
     })
     
     var searchStaffItemDIVs=document.querySelectorAll('.searchStaff-item')
    var tableSearchStaff=document.querySelector('#table-searchStaff')
     searchStaffItemDIVs.forEach(function(stt){
         
          stt.addEventListener('click',function(e){
            tableSearchStaff.classList.remove('move')
           var ducdz= stt.querySelector('.searchStaff-item-p').innerHTML;
            listStaffs.forEach(function(id){
               
               if(id.fullname==ducdz){
                  tableSearchStaff.innerHTML=`
                  <tr>   
                         <th>Ho Va Ten</th>
                         <th>Dia Chi Email </th>
                         <th>So dien Thoai</th>
                         <th>dia Chi</th>
                         <th>So CMND</th>
                         <th>Tinh Trang</th>
                         <th>gioi tinh</th>
                         </tr> 
                          <tr>
                             <td>${id.fullname}</td>
                             <td>${id.email}</td>
                             <td>${id.sdt}</td>
                             <td>${id.address}</td>
                             <td>${id.cmnd}</td>
                             <td class="green">${id.kiemtrajob}</td>
                             <td>${id.gender}</td>
                         </tr>
                  `
                   console.log(id.email)
               }
            })
          })
     })

}
     // nut come back
     var comeBack=document.querySelector('.comeBack')
     function Comeback(){
       var comeBack=document.querySelector('.comeBack')
       comeBack.classList.remove('move')
     }
     //tao cong tac
     var menus=document.querySelector('.menu')
     var menuWordList=document.querySelector('.menu-word-list')
     var addWord=document.querySelector('#add-word');
     var tableWordBussinessList=document.querySelector('.table-word-bussiness-list')
     var tableWordBussiness=document.querySelector('.table-word-bussiness')
     addWord.addEventListener('click',function(e){
           tableWordBussiness.classList.toggle('move')
           e.stopPropagation()
     })
     
     menus.addEventListener('click',function(){
      tableWordBussiness.classList.add('move')
      tableTaffTeamsALL.classList.add('move')
      tableTaffTeams.classList.add('move')
      tableDepartment.classList.add('move')
      tableDepartmentALL.classList.add('move')
     })
   //   open phong ban
   var openDepartment=document.querySelector('.open-department')
   var tableDepartment=document.querySelector('.table-department')
   var btnTableDepartment=document.querySelector('.btn-table-department')
   var tableDepartmentALL=document.querySelector('.table-departmentALL')
   var tableDepartmentName=document.querySelector('#table-department-name')
   var tableDepartmentDate=document.querySelector('#table-department-date')
   var tableDepartmentALLMenu=document.querySelector('.table-departmentALL-menu');
   openDepartment.addEventListener('click',function(){
      tableDepartment.classList.toggle('move')
   })
   btnTableDepartment.addEventListener('click',function(){
      tableDepartmentALL.classList.remove('move')
      let DepartmentStaffs=localStorage.getItem("Department-staffs") ? JSON.parse(localStorage.getItem("Department-staffs")) :[];
      // var tableDepartment=[];
      DepartmentStaffs.push({
         tableDepartmentName:tableDepartmentName.value,
         tableDepartmentDate:tableDepartmentDate.value,
      })
      localStorage.setItem("Department-staffs",JSON.stringify(DepartmentStaffs))
     console.log(DepartmentStaffs)
     qwert()
   })
   function qwert(){
      let DepartmentStaffs=localStorage.getItem("Department-staffs") ? JSON.parse(localStorage.getItem("Department-staffs")) :[];
      DepartmentStaffs.forEach(function(stt,id){
         var phongbanstt=document.querySelector('.phongbanstt')
         var tableDepartmentID=id;
         id++;
        var tableDepartmentSTT=id;
        
         var tableDepartmentALLMenu=document.querySelector('.table-departmentALL-menu')
         let div=document.createElement('div');
         div.classList.add('table-departmentALL-content')
         div.innerHTML=`
                          <div class="table-departmentALL-list">
                          <div class="table-departmentALL-item">
                            <span>${stt.tableDepartmentName}</span>
                            <p>thông tin</p>
                          </div>
                          <i class="fa-solid fa-users-line"></i>
                      </div>
                      <div class="table-departmentALL-xoa">
                          <span onclick="DeleteDepartment(${tableDepartmentID})">xóa nhóm</span>
                      </div>
                     `         
                     phongbanstt.innerHTML=tableDepartmentSTT;  
                     tableDepartmentALLMenu.appendChild(div) 
             
      })
                   
   }
   function DeleteDepartment(tableDepartmentID){
      let DepartmentStaffs=localStorage.getItem("Department-staffs") ? JSON.parse(localStorage.getItem("Department-staffs")) :[];
      console.log(DepartmentStaffs)
      console.log(tableDepartmentID)
      DepartmentStaffs.splice(tableDepartmentID,1);
      localStorage.setItem("Department-staffs",JSON.stringify(DepartmentStaffs))
      console.log(DepartmentStaffs)
      DepartmentStaffs.forEach(function(stt){
         tableDepartmentALLMenu.innerHTML=`
         <div class="table-taffTeamsALL-content">
         <div class="table-taffTeamsALL-list">
             <div class="table-taffTeamsALL-item">
               <span>${stt.tableDepartmentName}</span>
               <p>thông tin</p>
             </div>
             <i class="fa-solid fa-users-line"></i>
         </div>
         <div class="table-taffTeamsALL-xoa">
             <span>xóa nhóm</span>
         </div>
        </div>     
         `
      })
    
      
   }
   var consultDepartment=document.querySelector('.consult-department')
         consultDepartment.addEventListener('click',function(){
            tableDepartmentALL.classList.toggle('move')
         })
var clone=document.querySelectorAll('.table-department-clone')
    clone.forEach(function(stt){
          stt.addEventListener('click',function(){
            reloads()
      })
    })
     

      
