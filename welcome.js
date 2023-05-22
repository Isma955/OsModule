import os from 'os'


export let welcome = () => {
    return (`Привет, юзер. Вижу ты зашел с ${os.type()}`)
}

