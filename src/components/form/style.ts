import styled from "styled-components";

export const S_FORM = styled.form`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  color: #000;
  text-align:left;

  div {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    width: 30rem;
    height: fit-content;
    max-height: 25rem;
    padding: 1rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 8px 2px #333;

    p{
      width: 100%;
      padding-left: 1rem;
    }
    span {
      position: absolute;
      top: 0;
      right: 0;
      background-color: red;
      color: #fff;
      padding: 0.3rem 0.5rem;
      font-weight: bold;
      cursor: pointer;
    }

    label {
      transition: 0.3s all;
    }

    label:hover {
      opacity: 50%;
      cursor: pointer;
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADw8PDi4uL8/Pzo6OjMzMwEBAStra2ysrLJycn5+fnV1dX09PT39/ft7e2QkJB7e3u7u7s5OTmlpaVcXFwrKyuTk5NGRkbd3d1oaGgfHx9vb2+ZmZkXFxclJSVXV1eDg4NMTEx+fn41NTUPDw8/Pz9bW1swMDDBwcF0dHQfMcaDAAAIAklEQVR4nO2dC3fqKBDHgxKpSXw/anxUba+2+v0/4IakXclAAnkYaM/8zp49ezcR+Gd4DDBwPQ9BEARBEARBEARBEARBEARBEARBEARBEARBEARBkL8GpbTS688qx/Og40nPmLDa53CEF2JOYLuwtRiiQlToPKgQFboPKkSF7oMKnVRI+YyhEPByPYWaRJ/MqHS2MGpDIcxh0q3GWWkpp20oXMMn/b+vsEuBqBAVosLuFUq92AdhT1I4KFToP08eH4h6wXz48j/DU4lCRrbCq/ztcouDr/P92+EOZnH4SW4eTNJitahx8nqVZRQrlJ+VGbw4nZJn19dJa+qSL/XatGy1BJYkk/7HK21r7bj/VbuITyQp0VdLXU+krHbWYbxQUXN5lPoXBw2YwcjFb1xRQ2/jrEAucdO8Q11m1cFJeMmWTQWGtlVoaWrDucN1lMPIvKHCrW0JGhjZN5GXVIA32xK0vDVT6H4zJGTUqDvtP718zZt5v9GQ+CSF37IYa2Mkaua6Pd+GzXFF4Y+tFvdlEP8sp/rRfLq6pI/r29IZhYmE48dcMamj0fJEGjRIVxSSyywYU8VyCOWzvN5yUzthBxSm5lvChX5ItCX1Kqt9hUmhdy+6Dp0/j/e16qp9hYQcEtdBs3VE03WlqE5dtawwscmqypLRkFSerVm34Yv5qh+3s3+qmoFFhdwUi7jKumbI31z+GoW8sm3HNTINqvWpVhV+1MmTevFblT7VkkLG/3mtlyn1JmtiPnDYUsjk7ZkKGic784pqr5Z+eGFthZ5/Mc7HmsKtOiKdCv8uI+pEIaWhX5d+kQFpPodCrRPTnJpEvre2t5MnjOfL6Wx2ng4Ho8IMKhTbndj+bJ40zC1QXs98c4XWbrFukSiMFOuv62Ri9UcUenE6l8+NAtkfGm8+dIu6WYQ0LNlJXkSeMjTPmRZmgr8pdFO4WQ+qfrUDgeNgUJngpnK3o7difzqdEe5VNowDbQGCOs79g1oj/k5KJvRuej9z5clGMzkv1blPw8hQTscoFuBT/h39clAheYOGoDwZ/doEIzNoQ5puQTunEE4pEt9vYTgVepEKMNL/qHuFMegxqHc2ngrByDXq3bUfp2OFjCyk7iISe5lvrYvTaXPMfiCy8uDXCdxTeMjWkx5l9N7BG2R766WP4sO/nMREfQC/j36PtvNaGsFhDVphlW5p0tTfprmwzEThRqoBK9cU7kIwA/ROQitk6fqp+Hz0nv8Ag8pDYtcKTzCJOP88Xw25M/qZk7iFv9dO9rtWKK2v5f3tIXA/w8Qjz29WwD0A7XjRtcIbTOLhlSSV9S5nkfkDhQlQb+GYwhik0Hs8SmQoDvYk/2Mqhsae4Qu6oKWuFfZACoGo8KyaPFLPF99ZwOe6AOWOFa7hesRBLD008A+imRicDel2ajpW+A+m8CE+LcrmMSIw2XObu6VwA1MQzbMqykYYUWRDD9xS+A5TEF22wq2onpjEALg1ugGxY4WnMoWFWzW5MQ+6po4plGwonq2ZFWWT60xh/L1jCkvboSRfKQK2w4CU07FCaTQ7i0+LsskNCI73pW8w9EkoPK+AigGfijMkRi7wFcfGQ8lxFvp6HpOt8Nq4TyP4pVJVnjqmELYiYY7OlKWhYC0GdLjUMb9UcTggNzc6qbY18l0JuFKBerol065tKI15YjNiyWO4eE/93HmAHWzIzs0PYTOiwlhH0lM8wIbjr9wcX/J7nJvjs7wNEoPt8wsxMz6tz/bPuTkj0YKMt2PwBQ5EQ9ft8HFQ+VsiMAIja2EW3zuDh3DBFLRj+wqzliYKpHCSnnyExSHuhXTs3/b5DRuVCfXL+p2vl66lRHzVa8e1fOCISZ4rNTha1v2+BfScqcIrKSi15BFxd8c9hYoZhGLdWnmgfQB/SCf6nVULUV+yIcYGG53ZSAL7GW1PamUPWBE7MjEJxFOsxI2PDipU7eNnsYZl28AsFQi3PIzu0+heIYObLyn+VbOVL1s+9Kh0+YcjCndSEFdinXH5eRH5DjOa7uK7qJAotmdS5heVGdO6u1IFxdCRURitnQha9eL2eEpkjckfr9IokXE3ysuGQiYvSHESf3t0kFvWdlAQ3qXfwremkPAwtSLi1/dHwdf7YUHQVmhYR+3FeRfdfsiHvHH/Nuc3BUV+cRQy5f6ayzYkbwXnufJT/JI474PpgQtrsfqLBvHXhmO9VYWMFe80mTBw/8wMv/Crfr6RuUCbJ7vItlY1TSq3bsvQFYWMfOqON6uZVzoPbFMhIwu/6rkUmq2w/gqFGbdqZ1oSt2dfMQerCvmQfQ4r2XCwrnpk3bYNCTlyv9pAJB/9w3PWDf8uhYlvbXSFDB/mzU8duqSQW+TD5GLO+eLn9V+mMGMWfd/PLWeSnlwbDXUReq4rJGSz5IZUH4oa3OvUzzYUKhfka5FWvvdDpFijmt93JLtSqVbKDW+mbf9Cuuv9MBzE/mQy8aPg5byqb7wUVhjgYci1bYmK1fwmOTBybajw/IRbBdPqmFVKPvY1VChF3FYkcv7exKKYVWPe9blYpTCSrIIRHbYiv2e36TlTysPMXZXI4J56LYXU+7QtpITP5tcN0CzsykEzphf8tHMYmmYbsW5pTEtzaOmwd0i9votX0fI5WYvH2f3l6tjQv2qRy3G1bPsvSkg+Vjgamf9lok9lNAqfcBsBVd3qaAnq0o0tCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIKI/AfqPXonf9pk1AAAAABJRU5ErkJggg== ");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center center;
      position: relative;
      z-index: 10;

      img {
        opacity: 70%;
      }
    }

    input[type="file"] {
      display: none;
    }

    textarea {
      resize: none;
      width: 90%;
      height: 8rem;
      border: 1px solid #ccc;

      &:focus {
        outline: none;
      }
    }

    textarea:nth-of-type(1) {
      height: fit-content;
    }

    button {
      background-color: #222;
      padding: 1rem 2rem;
      border-radius: 0.4rem;
      color: #fff;
      cursor: pointer;
      align-self: flex-end;
      border: 0;
    }
  }

  img {
    max-width: 20rem;
    border: 1px solid #ccc;
  }
`;

