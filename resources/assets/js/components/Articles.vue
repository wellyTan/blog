<template>
    <ul id="example-1">
        <li v-for="item in items">
            {{ item.message }}
        </li>
    </ul>
</template>
<script>
    var example1 = new Vue({
        el: '#example-1',
        data: {
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    })
</script>
