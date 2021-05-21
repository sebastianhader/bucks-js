
    /**
     * Checks if code is running on client or server side.
     * @return {*|{}}
     */
    export const isClient = () => {
        return typeof window !== "undefined"
    }


    /**
     * Copies input or text area value to clipboard.
     * Element is here a dom tree element (document.getElementById)
     * @param element
     */
    export const toClipboardFromElement = (element: any) => {
        try {
            element.select()
            let successful = document.execCommand('copy')
            return !!successful
        } catch (err) {
            return false
        }
    }


    /**
     * Copies area value to the clipboard.
     * @param text
     */
    export const toClipboard = (text: string) => {
        if (typeof window === 'undefined') return false

        let textArea = document.createElement('textarea')
        textArea.style.position = 'fixed'
        textArea.style.top = '0'
        textArea.style.left = '0'
        textArea.style.width = '2em'
        textArea.style.height = '2em'
        textArea.style.padding = '0'
        textArea.style.border = 'none'
        textArea.style.outline = 'none'
        textArea.style.boxShadow = 'none'
        textArea.style.background = 'transparent'

        textArea.value = text // set Value

        document.body.appendChild(textArea)
        let success = toClipboardFromElement(textArea)
        document.body.removeChild(textArea)
        return success
    }


    /**
     * Start download of blob file via hidden anchor tag.
     * @param blob
     * @param fileName
     */
    export const downloadFile = (blob: Blob, fileName: string) => {
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }