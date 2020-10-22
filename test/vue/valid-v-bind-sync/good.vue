<template>
    <MyComponent :aaa.sync="foo" />

    <div v-for="todo in todos">
        <MyComponent :aaa.sync="todo.name" />
    </div>
</template>
