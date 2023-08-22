<!-- 
  :rows is a prop that is passed to the textarea component it's binded because otherwise it will be a string and not a number and the textarea component expects a number
-->

<template>
  <c-container maxW="md" p="4">
    <c-heading mb="4" size="lg">Contact Us</c-heading>
    <form @submit.prevent="submitForm">
      <c-form-control mb="4">
        <c-form-label for="name">Name</c-form-label>
        <c-input
          id="name"
          autocomplete="name"
          v-model="formData.name"
          required
        />
      </c-form-control>
      <c-form-control mb="4">
        <c-form-label for="email">Email</c-form-label>
        <c-input
          id="email"
          autocomplete="email"
          type="email"
          v-model="formData.email"
          required
        />
      </c-form-control>
      <c-form-control mb="4">
        <c-form-label for="message">Message</c-form-label>
        <c-textarea
          id="message"
          autocomplete="message"
          v-model="formData.message"
          :rows="5"
          required
        />
      </c-form-control>
      <c-button type="submit" colorScheme="blue">Submit</c-button>
    </form>
  </c-container>
</template>

<script>
import {
  CContainer,
  CHeading,
  CFormControl,
  CFormLabel,
  CInput,
  CTextarea,
  CButton,
} from "@chakra-ui/vue-next";

export default {
  components: {
    CContainer,
    CHeading,
    CFormControl,
    CFormLabel,
    CInput,
    CTextarea,
    CButton,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // implement form submission logic here
      console.log("Form submitted:", this.formData);
    },
  },
};
</script>
