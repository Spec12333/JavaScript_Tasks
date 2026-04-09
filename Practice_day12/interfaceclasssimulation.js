class StorageProvider {
    upload(file) {
        throw new Error("Method upload must be implemented");
    }

    download(filename) {
        throw new Error("Method download must be implemented");
    }
}

class LocalStorageProvider extends StorageProvider {
    constructor() {
        super();
    }

    upload(file) {
        console.log(`Uploading ${file}`);
        
    }

    download(filename) {
        console.log(`Downloading ${filename}`);
    }
}

class CloudStorageProvider extends StorageProvider {
    constructor() {
        super();
    }

    upload(file) {
        console.log(`Uploading ${file}`);
    }

    download(filename) {
        console.log(`Uploading ${filename}`);
    }
}

function useStorage(provider) {
    if (typeof provider.upload !== "function" && typeof provider.download !== "function") {
        throw new Error("Invalid Storage Provider");
    }

    provider.upload("file.js");
    provider.download("file.js")
}

useStorage(new LocalStorageProvider()); // Works
useStorage({}); // Error: Invalid storage provider