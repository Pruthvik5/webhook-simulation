// Order Relay with Discount

function order_details() {
    var form = document.getElementById('order_update');
    console.log(form);
    if (form.url.value == "") {
        alert("Submission Failed, please fill all the mandatory fields");
    } else {
        var date = new Date();
        var millis = date.getTime();
        var merchant_discount = parseFloat((parseFloat(form.a_total_discount.value)).toFixed(2));
        var item_1_subtotal = parseFloat((parseFloat(form.a_item_1_price.value) + parseFloat(form.a_otp_1_price.value) + parseFloat(form.a_otp_2_price.value)).toFixed(2));
        var item_2_subtotal = parseFloat((parseFloat(form.a_item_2_price.value)).toFixed(2));
        var item_1_total = parseFloat((item_1_subtotal * parseInt(form.a_item_1_qty.value)).toFixed(2));
        var item_2_total = parseFloat((item_2_subtotal * parseInt(form.a_item_2_qty.value)).toFixed(2));
        var item_total_subtotal = parseFloat((item_1_total + item_2_total).toFixed(2));
        var item_1_discount = parseFloat((item_1_total / item_total_subtotal * merchant_discount).toFixed(2));
        var item_2_discount = parseFloat((item_2_total / item_total_subtotal * merchant_discount).toFixed(2));
        var item_1_taxable_amount = parseFloat((item_1_total - item_1_discount).toFixed(2));
        var item_2_taxable_amount = parseFloat((item_2_total - item_2_discount).toFixed(2));
        var item_1_total_with_tax = parseFloat((item_1_total).toFixed(2));
        var item_2_total_with_tax = parseFloat((item_2_total).toFixed(2));
        var sub_total = parseFloat((item_1_total + item_2_total).toFixed(2));
        var order_level_total_charge = parseFloat(parseFloat(form.a_pc.value).toFixed(2));
        var total_charge = parseFloat(parseFloat(order_level_total_charge).toFixed(2));
        var order_total = parseFloat(parseFloat(sub_total - parseFloat(form.a_total_discount.value) + total_charge).toFixed(2));
        // var item_1_encode = encodeURIComponent(JSON.parse(form.a_item_1_encode_name.value));
        // var item_2_encode = encodeURIComponent(JSON.parse(form.a_item_2_encode_name.value));
        // var opt_1_encode = encodeURIComponent(JSON.parse(form.a_opt_1_encode_name.value));
        // var opt_2_encode = encodeURIComponent(JSON.parse(form.a_opt_2_encode_name.value));
        var trigger = {
            "customer": {
                "address": {
                    "city": "",
                    "is_guest_mode": false,
                    "landmark": "",
                    "latitude": 0.0,
                    "line_1": "UAE",
                    "line_2": null,
                    "longitude": 0.0,
                    "pin": "",
                    "sub_locality": "",
                    "tag": "hub_deliveroo"
                },
                "email": "deliveroo_dflt_user@email.com",
                "name": "Deliveroo User",
                "phone": "+919999999996"
            },
            "order": {
                "details": {
                    "biz_id": parseInt(form.a_biz_id.value),
                    "channel": "deliveroo",
                    "charges": [{
                        "title": "Delivery Charge",
                        "value": parseFloat(form.a_pc.value)
                    }],
                    "coupon": "",
                    "created": millis,
                    "dash_config": {
                        "auto_assign": false, 
                        "enabled": false
                    },
                    "delivery_datetime": parseInt(millis + 2700000),
                    "discount": parseFloat(parseFloat(form.a_total_discount.value).toFixed(1)),
                    "total_external_discount": 0,
                    "ext_platforms": [{
                        "id": form.a_agg_id.value,
                        "kind": "food_aggregator",
                        "name": "deliveroo",
                        "delivery_type": "partner",
                        "extras": {
                            "order_uuid": "ae:d843cc8f-7d6d-48eb-94ca-aea5478f6605"
                        },
                        "discounts": [{
                            "code": "Deliveroo Offer",
                            "is_merchant_discount": true,
                            "title": "Deliveroo Offer",
                            "value": parseFloat(parseFloat(form.a_total_discount.value).toFixed(1))
                        }]
                    }],
                    "id": parseInt(form.a_up_id.value),
                    "instructions": form.a_instruction.value,
                    "item_level_total_charges": 0,
                    "item_level_total_taxes": 0,
                    "item_taxes": 0.0,
                    "merchant_ref_id": form.a_agg_id.value,
                    "modified_from": null, 
                    "modified_to": null,
                    "order_level_total_charges": order_level_total_charge,
                    "order_level_total_taxes": 0,
                    "order_state": "Placed",
                    "order_subtotal": sub_total,
                    "order_total": order_total,
                    "payable_amount": order_total,
                    "order_type": "delivery",
                    "state": "Placed",
                    "taxes": [],
                    "total_charges": total_charge,
                    "total_taxes": 0
                },
                "items": [{
                        "charges": [],
                        "discount": 0.0,
                        "food_type": "2",
                        "id": 46898,
                        "image_landscape_url": null,
                        "image_url": null,
                        "merchant_id": form.a_item_1_id.value,
                        "options_to_add": [{
                                "id": 11262,
                                "merchant_id": form.a_otp_1_id.value,
                                "price": parseFloat(form.a_otp_1_price.value),
                                "title": form.a_otp_1_name.value,
                                "translations": [{
                                    "language": "ar",
                                    "title": ""
                                }],
                                "unit_weight": null

                            },
                            {
                                "id": 15362,
                                "merchant_id": form.a_otp_2_id.value,
                                "price": parseFloat(form.a_otp_2_price.value),
                                "title": form.a_otp_2_name.value,
                                "translations": [{
                                    "language": "ar",
                                    "title": ""
                                }],
                                "unit_weight": null

                            }
                        ],
                        "options_to_remove": [

                        ],
                        "price": parseFloat(form.a_item_1_price.value),
                        "quantity": parseInt(form.a_item_1_qty.value),
                        "taxes": [],
                        "title": form.a_item_1_name.value,
                        "total": item_1_total,
                        "total_with_tax": item_1_total_with_tax,
                        "translations": [{
                            "language": "ar",
                            "title": ""
                        }],
                        "unit_weight": 0.0

                    },
                    {
                        "charges": [],
                        "discount": 0.0,
                        "food_type": "2",
                        "id": 46898,
                        "image_landscape_url": null,
                        "image_url": null,
                        "merchant_id": form.a_item_2_id.value,
                        "options_to_add": [],
                        "options_to_remove": [

                        ],
                        "price": parseFloat(form.a_item_2_price.value),
                        "quantity": parseInt(form.a_item_2_qty.value),
                        "taxes": [],
                        "title": form.a_item_2_name.value,
                        "total": item_2_total,
                        "total_with_tax": item_2_total_with_tax,
                        "translations": [{
                            "language": "ar",
                            "title": ""
                        }],
                        "unit_weight": 0.0

                    }
                ],
                "next_state": "Acknowledged",
                "next_states": [
                    "Acknowledged",
                    "Food Ready",
                    "Dispatched",
                    "Modified",
                    "Completed",
                    "Cancelled"
                ],
                "payment": [{
                    "amount": order_total,
                    "option": form.a_payment.value,
                    "srvr_trx_id": null
                }],
                "store": {
                    "address": "Sector 7,HSR Layout",
                    "id": 1712,
                    "latitude": 12.908136,
                    "longitude": 77.647608,
                    "merchant_ref_id": form.a_pos_store_id.value,
                    "name": "HSR Layout"
                }
            }
        }
        console.log(trigger);
        var auth_key = form.auth_key.value;
        var auth_value = form.auth_value.value
        $.ajax({
            type: 'POST',
            url: form.url.value,
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(trigger),
            success: function(response) {
                // $(".overlay").hide();
                alert('Order Details Triggered to POS');
                console.log(JSON.stringify(response))
                form.reset();
            },
            error: function(response) {
                // $(".overlay").hide();
                alert(response.text());
            },
        });
    }
}