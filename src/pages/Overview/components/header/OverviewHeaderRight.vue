<template>
  <div class="header-container">
    <div class="location-container">
      <div class="location-item">
        <img :src="linkedin" class="location-image"/>
        <a href="https://www.linkedin.com/in/neta-einy-60856412/" target="_blank">{{ contactInfo.linkedin }}</a>
      </div>
      <div class="location-item">
        <img :src="email" class="location-image"/>
        <div>{{ contactInfo.email }}</div>
      </div>
      <div class="location-item">
        <img :src="location" class="location-image"/>
        <div>{{ contactInfo.address }}</div>
      </div>
      <div class="location-item">
        <img :src="phone" class="location-image"/>
        <div>{{ contactInfo.phone }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import linkedin from '../../../../assets/1200px-Linkedin.svg.png';
import email from '../../../../assets/email2.png';
import location from '../../../../assets/location-sign.svg';
import phone from '../../../../assets/phone-volume.svg';
import { contactInfo } from '../../consts';

export default {
  data() {
    return {
      phone,
      email,
      linkedin,
      location,
      contactInfo,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../../../style/colors";
.header-container {
  width: 35%;
  padding: 0 24px;
  display: flex;
  justify-content: flex-end;
  .location-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 16px;
    opacity: 0.8;
    .location-image {
      width: 20px;
      height: 20px;
    }
    .location-item {
      display: flex;
      align-items: center;
      height: 30px;
      width: 400px;
      font-weight: 100;
      color: $basic_header_color;
      a, div {
        text-decoration: none;
        padding-left: 10px;
        color: $basic_header_color;
      }
    }
  }
}
</style>
