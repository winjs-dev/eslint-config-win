<template>
  <div @click="foo" />
  <div @click.left="foo" />
  <div @click.prevent />
  <div @click.stop />
</template>
