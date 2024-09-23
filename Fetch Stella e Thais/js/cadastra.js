
    let enviar = () => {
        let form = document.getElementById("frm");
        form.action = "proc.php";
        form.method = "post";
        form.submit();
    }

