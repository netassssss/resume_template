<template>
  <div class="header-left-container" id="headerLeft">
    <div class="header-title">
      <div>{{ fullName }}</div>
      <div>{{ personDescription }}</div>
    </div>
  </div>
</template>

<script>
import linkedin from '../../../../assets/1200px-Linkedin.svg.png';
import email from '../../../../assets/email2.png';
import location from '../../../../assets/location-sign.svg';
import phone from '../../../../assets/phone-volume.svg';
import { fullName, personDescription } from '../../consts';

export default {
  data() {
    return {
      phone,
      email,
      fullName,
      linkedin,
      location,
      personDescription,
    };
  },
};
</script>

<style scoped lang="scss">
  @import "../../../../style/colors";
  .header-left-container {
    background-color: $basic_header_color;
    color: $basic_content;
    width: 65%;
    padding: 24px 0 24px 24px;
    display: flex;
    justify-content: space-between;
    .header-title {
      width: 100%;
      font-size: 28px;
      font-weight: 500;
      > div {
        &:nth-child(2) {
          font-size: 20px;
          font-weight: 400;
          margin: 10px 0 20px 0;
        }
      }
    }
  }
</style>
