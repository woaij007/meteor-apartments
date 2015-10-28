AutoForm.hooks({
    updateApartmentDetail: {
        onSuccess: function (formType, result) {
            console.log("Apartment Detail is updated successfully.");
            //showToast("success", "Product is updated successfully.");
            sAlert.success("Apartment Detail is updated successfully.");
        },
        onError: function(formType, error) {
            //showToast("error", error);
            sAlert.error(error);
        }
    }
});