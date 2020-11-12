class ReadTextFile {
    _text;

    getText() {
        return this._text;
    }

    setText(text) {
        this._text = text;
    }

    async uploadFile($element) {
        const fileSelected = $element;
        
        const file = fileSelected.files[0];
        
        const contentFile = await this._readFileAsync(file);
        this.setText(contentFile);
    }

    _readFileAsync(file) {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsText(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            } 

            fileReader.onerror = reject;
        })
    }
}