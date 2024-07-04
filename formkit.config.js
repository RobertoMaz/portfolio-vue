import { generateClasses } from "@formkit/themes"

const config = {
    config: {
        classes: generateClasses({
            global: {
                wrapper: 'space-y-2 mb-3',
                message: 'bg-red-500 text-white text-center text-sm font-bold uppercase p-2 my-5',
                label: 'block mb-1 font-bold text-lg text-white',
                input: 'w-full p-3 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400',
            },
            submit: {
                input: '$reset bg-gray-600 hover:bg-gray-700 rounded-lg text-green-400 hover:text-green-500 font-bold w-full p-3 mt-10'
            },
        })
    }
}

export default config