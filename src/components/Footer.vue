<template>
  <footer>
    <ul class="policy_list">
      <li><a href="#none">회사소개</a></li>
      <li><a href="#none">IR</a></li>
      <li><a href="#none">채용정보</a></li>
      <li><a href="#none">광고/제휴/출점문의</a></li>
      <li><a href="#none">이용약관</a></li>
      <li><a href="#none">편성기준</a></li>
      <li>
        <a href="#none">
          <strong>개인정보처리방침</strong></a>
      </li>
      <li><a href="#none">법적고지</a></li>
      <li><a href="#none">이메일주소무단수집거부</a></li>
      <li><a href="#none">윤리경영</a></li>
      <li><a href="#none">사이버감사실</a></li>
    </ul>
    <article class="company_info_wrap">
      <section class="company_info">
        <address>
          (04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)
        </address>
        <dl class="company_info_list">
          <dt>대표이사</dt>
          <dd>허민회</dd>
          <dt>사업자등록번호</dt>
          <dd>104-81-45690</dd>
          <dt>통신판매업신고번호</dt>
          <dd>2017-서울용산-0662 <a href="#none">사업자정보확인</a></dd>
        </dl>
        <dl class="company_info_list">
          <dt>호스팅사업자</dt>
          <dd>CJ올리브네트웍스</dd>
          <dt>개인정보보호 책임자</dt>
          <dd>심준범</dd>
          <dt>대표이메일</dt>
          <dd>cjcgvmaster@cj.net</dd>
          <dt>고객센터</dt>
          <dd>1544-1122</dd>
        </dl>
        <p class="copyright">
          © CJ CGV. All Rights Reserved
        </p>
      </section>
      <section class="familysite_wrap">
        <label for="familysite">CJ그룹 계열사 바로가기</label>
        <select id="familysite">
          <option
            value
            class="familysiteTitle"
          >
            계열사 바로가기
          </option>
          <optgroup label="CJ그룹">
            <option value="http://www.cj.net/">
              CJ주식회사
            </option>
          </optgroup>
          <optgroup label="식품 & 식품서비스">
            <option value="https://www.cj.co.kr/kr/index">
              CJ제일제당
            </option>
            <option value="https://www.cjfoodville.co.kr/main.asp">
              CJ푸드빌
            </option>
            <option value="http://www.cjfreshway.com/index.jsp">
              CJ프레시웨이
            </option>
          </optgroup>
          <optgroup label="생명공학">
            <option value="https://www.cj.co.kr/kr/about/business/bio">
              CJ제일제당 BIO사업부문
            </option>
            <option value="https://www.cj.co.kr/kr/about/business/bio">
              CJ Feed&Card
            </option>
          </optgroup>
          <optgroup label="물류 & 신유통">
            <option value="https://www.cjlogistics.com/ko/main">
              CJ대한통운
            </option>
            <option value="http://www.cjenc.co.kr/kr/Default.asp">
              CJ대한통운 건설부문
            </option>
            <option value="https://www.oliveyoung.co.kr/store/company/brandStory.do">
              CJ올리브영
            </option>
            <option value="https://www.cjolivenetworks.co.kr:449/">
              CJ올리브네트웍스
            </option>
            <option value="https://www.cjoshopping.com:9002/index.asp">
              CJ ENM 커머스부문
            </option>
          </optgroup>
          <optgroup label="엔터테인먼트 & 미디어">
            <option value="http://www.cjem.net/main/?locale=ko">
              CJ ENM 엔터테인먼트부문
            </option>
            <option value="http://corp.cgv.co.kr/">
              CJ CGV
            </option>
          </optgroup>
        </select>
        <a
          href="#none"
          class="btn_familysite"
        >GO</a>
      </section>
    </article>
  </footer>
</template>


<style scoped lang="scss">
footer {
  min-width: 1040px;
  padding: 0 0 14px;
  background-color: #f8f8f8;
  margin-top: 100px;

  > .policy_list {
    display: flex;
    justify-content: space-between;
    max-width: 980px;
    margin: 0 auto;
    padding: 23px 0;
    border-bottom: 1px solid #ebebeb;

    &::after {
      content: '';
      clear: both;
      display: block;
    }

    > li {
      > a {
        font-weight: 500;
        font-size: 13px;
        color: #666;
        line-height: 1.462em;

        > strong {
          font-weight: 700;
          color: #222;
          text-decoration: underline;
        }
      }
    }
  }

  > .company_info_wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 980px;
    margin: 0 auto;
    padding: 23px 0;

    > .company_info {
      font-size: 12px;
      color: #666;
      line-height: 1.667em;

      > address {
        font-style: normal;
      }

      > .company_info_list {
        display: flex;

        &::after {
          content: '';
          clear: both;
          display: block;
        }

        > dt {

          &:first-child {
            &::before {
              display: none;
            }
          }  
          &::after {
            content: ':';
            padding: 0 4px;
          }

          &::before {
            content: '·';
            padding: 0 8px 0 4px;
          }
        }

        > dd {
          a > {
            text-decoration: underline;
          }
        }
      }
    }

    > .familysite_wrap {
      position: relative;

      > label {
        position: absolute;
        left: 0;
        top: 0;
        width: calc(100% - 38px);
        height: 100%;
        font-size: 0;
        line-height: 0;
      }

      > select {
        position: relative;
        height: 34px;
        font-size: 12px;
        color: #666;
        line-height: 34px;
        border: none;
        background-color: transparent;
        border: 1px solid #d8d8d8;

        option {
          font-weight: normal;
          display: block;
          white-space: nowrap;
          min-height: 1.2em;
          padding: 0px 2px 1px;
          &.familysiteTitle {
            display: none;
          }
        }

        > optgroup {
          font-weight: bolder;
          display: block;
        }
      }

      > .btn_familysite {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 34px;
        margin-left: -1px;
        font-size: 14px;
        color: #fff;
        line-height: 1.429em;
        background-color: #9e9e9e;
        vertical-align: top;
      }
    }
  }
}
</style>