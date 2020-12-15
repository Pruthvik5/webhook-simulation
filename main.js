// Rider Status Change

function rider_details() {
    var form = document.getElementById('rider_update');
    console.log(form);
    if (form.url.value == "") {
        alert("Submission Failed, please fill all the mandatory fields");
    } else if (form.r_status.value == "Assigned") {
        var date = new Date();
        var millis = date.getTime();
        var trigger = {
            "additional_info": {
                "external_channel": {
                    "name": form.a_name.value,
                    "order_id": form.a_id.value
                }
            },
            "delivery_info": {
                "current_state": form.r_status.value,
                "delivery_person_details": {
                    "alt_phone": "8888888888",
                    "name": form.r_name.value,
                    "phone": form.r_phone.value,
                    "user_id": parseInt(form.r_id.value)
                },
                "mode": "aggregator",
                "status_updates": [{
                    "comments": null,
                    "created": millis,
                    "status": "assigned"
                }]
            },
            "order_id": parseInt(form.u_id.value),
            "store": {
                "id": parseInt(form.s_id.value),
                "ref_id": form.s_ref.value
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
                alert('Rider Details Triggered to POS');
                console.log(JSON.stringify(response))
                form.reset();
            },
            error: function(response) {
                // $(".overlay").hide();
                alert(response.text());
            },
        });
    } else if (form.r_status.value == "At store") {
        var date = new Date();
        var millis = date.getTime();
        var trigger = {
            "additional_info": {
                "external_channel": {
                    "name": form.a_name.value,
                    "order_id": form.a_id.value
                }
            },
            "delivery_info": {
                "current_state": form.r_status.value,
                "delivery_person_details": {
                    "alt_phone": "8888888888",
                    "name": form.r_name.value,
                    "phone": form.r_phone.value,
                    "user_id": parseInt(form.r_id.value)
                },
                "mode": "aggregator",
                "status_updates": [{
                        "comments": null,
                        "created": millis,
                        "status": "assigned"
                    },
                    {
                        "comments": null,
                        "created": millis,
                        "status": "at-store"
                    }
                ]
            },
            "order_id": parseInt(form.u_id.value),
            "store": {
                "id": parseInt(form.s_id.value),
                "ref_id": form.s_ref.value
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
                alert('Rider Details Triggered to POS');
                console.log(JSON.stringify(response))
                form.reset();
            },
            error: function(response) {
                // $(".overlay").hide();
                alert(response.text());
            },
        });
    } else if (form.r_status.value == "Out for delivery") {
        var date = new Date();
        var millis = date.getTime();
        var trigger = {
            "additional_info": {
                "external_channel": {
                    "name": form.a_name.value,
                    "order_id": form.a_id.value
                }
            },
            "delivery_info": {
                "current_state": form.r_status.value,
                "delivery_person_details": {
                    "alt_phone": "8888888888",
                    "name": form.r_name.value,
                    "phone": form.r_phone.value,
                    "user_id": parseInt(form.r_id.value)
                },
                "mode": "aggregator",
                "status_updates": [{
                        "comments": null,
                        "created": millis,
                        "status": "assigned"
                    },
                    {
                        "comments": null,
                        "created": millis,
                        "status": "at-store"
                    },
                    {
                        "comments": null,
                        "created": millis,
                        "status": "out-for-delivery"
                    }
                ]
            },
            "order_id": parseInt(form.u_id.value),
            "store": {
                "id": parseInt(form.s_id.value),
                "ref_id": form.s_ref.value
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
                alert('Rider Details Triggered to POS');
                console.log(JSON.stringify(response))
                form.reset();
            },
            error: function(response) {
                // $(".overlay").hide();
                alert(response.text());
            },
        });
    } else if (form.r_status.value == "Delivered") {
        var date = new Date();
        var millis = date.getTime();
        var trigger = {
            "additional_info": {
                "external_channel": {
                    "name": form.a_name.value,
                    "order_id": form.a_id.value
                }
            },
            "delivery_info": {
                "current_state": form.r_status.value,
                "delivery_person_details": {
                    "alt_phone": "8888888888",
                    "name": form.r_name.value,
                    "phone": form.r_phone.value,
                    "user_id": parseInt(form.r_id.value)
                },
                "mode": "aggregator",
                "status_updates": [{
                        "comments": null,
                        "created": millis,
                        "status": "assigned"
                    },
                    {
                        "comments": null,
                        "created": millis,
                        "status": "at-store"
                    },
                    {
                        "comments": null,
                        "created": millis,
                        "status": "out-for-delivery"
                    },
                    {
                        "comments": null,
                        "created": millis,
                        "status": "delivered"
                    }
                ]
            },
            "order_id": parseInt(form.u_id.value),
            "store": {
                "id": parseInt(form.s_id.value),
                "ref_id": form.s_ref.value
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
                alert('Rider Details Triggered to POS');
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

// Order Relay

function order_details() {
    var form = document.getElementById('order_update');
    console.log(form);
    if (form.url.value == "") {
        alert("Submission Failed, please fill all the mandatory fields");
    } else {
        var date = new Date();
        var millis = date.getTime();
        var merchant_discount = parseFloat((parseFloat(form.a_total_discount.value) - parseFloat(form.a_agg_discount.value)).toFixed(2));
        var item_1_pc = parseFloat((parseFloat(form.a_item_1_pc.value) * parseInt(form.a_item_1_qty.value)).toFixed(2));
        var item_2_pc = parseFloat((parseFloat(form.a_item_2_pc.value) * parseInt(form.a_item_2_qty.value)).toFixed(2));
        var item_3_pc = parseFloat((parseFloat(form.a_item_3_pc.value) * parseInt(form.a_item_3_qty.value)).toFixed(2));
        var item_1_pc_cgst_tax = parseFloat((item_1_pc * parseFloat((parseFloat(form.a_item_1_pc_tax.value) / 2) / 100)).toFixed(2));
        var item_1_pc_sgst_tax = parseFloat((item_1_pc * parseFloat((parseFloat(form.a_item_1_pc_tax.value) / 2) / 100)).toFixed(2));
        var item_2_pc_cgst_tax = parseFloat((item_2_pc * parseFloat((parseFloat(form.a_item_2_pc_tax.value) / 2) / 100)).toFixed(2));
        var item_2_pc_sgst_tax = parseFloat((item_2_pc * parseFloat((parseFloat(form.a_item_2_pc_tax.value) / 2) / 100)).toFixed(2));
        var item_3_pc_cgst_tax = parseFloat((item_3_pc * parseFloat((parseFloat(form.a_item_3_pc_tax.value) / 2) / 100)).toFixed(2));
        var item_3_pc_sgst_tax = parseFloat((item_3_pc * parseFloat((parseFloat(form.a_item_3_pc_tax.value) / 2) / 100)).toFixed(2));
        var item_1_subtotal = parseFloat((parseFloat(form.a_item_1_price.value) + parseFloat(form.a_otp_1_price.value) + parseFloat(form.a_otp_2_price.value)).toFixed(2));
        var item_2_subtotal = parseFloat((parseFloat(form.a_item_2_price.value) + parseFloat(form.a_otp_3_price.value) + parseFloat(form.a_otp_4_price.value)).toFixed(2));
        var item_3_subtotal = parseFloat(parseFloat(form.a_item_3_price.value).toFixed(2));
        var item_1_total = parseFloat((item_1_subtotal * parseInt(form.a_item_1_qty.value)).toFixed(2));
        var item_2_total = parseFloat((item_2_subtotal * parseInt(form.a_item_2_qty.value)).toFixed(2));
        var item_3_total = parseFloat((item_3_subtotal * parseInt(form.a_item_3_qty.value)).toFixed(2));
        var item_total_subtotal = parseFloat((item_1_total + item_2_total + item_3_total).toFixed(2));
        var item_1_discount = parseFloat((item_1_total / item_total_subtotal * merchant_discount).toFixed(2));
        var item_2_discount = parseFloat((item_2_total / item_total_subtotal * merchant_discount).toFixed(2));
        var item_3_discount = parseFloat((item_3_total / item_total_subtotal * merchant_discount).toFixed(2));
        var item_1_taxable_amount = parseFloat((item_1_total - item_1_discount).toFixed(2));
        var item_2_taxable_amount = parseFloat((item_2_total - item_2_discount).toFixed(2));
        var item_3_taxable_amount = parseFloat((item_3_total - item_3_discount).toFixed(2));
        var item_1_gst_tax = parseFloat((parseFloat((form.a_item_1_cgst.value) + parseFloat(form.a_item_1_sgst.value)) / 100).toFixed(2));
        var item_2_gst_tax = parseFloat(((parseFloat(form.a_item_2_cgst.value) + parseFloat(form.a_item_2_sgst.value)) / 100).toFixed(2));
        var item_3_gst_tax = parseFloat(((parseFloat(form.a_item_3_cgst.value) + parseFloat(form.a_item_3_sgst.value)) / 100).toFixed(2));
        var item_1_tax = parseFloat((item_1_taxable_amount * item_1_gst_tax).toFixed(2));
        var item_2_tax = parseFloat((item_2_taxable_amount * item_2_gst_tax).toFixed(2));
        var item_3_tax = parseFloat((item_3_taxable_amount * item_3_gst_tax).toFixed(2));
        var item_1_total_with_tax = parseFloat((item_1_total + item_1_tax + item_1_pc).toFixed(2));
        var item_2_total_with_tax = parseFloat((item_2_total + item_2_tax + item_2_pc).toFixed(2));
        var item_3_total_with_tax = parseFloat((item_3_total + item_2_tax + item_3_pc).toFixed(2));
        var sub_total = parseFloat((item_1_total + item_2_total + item_3_total).toFixed(2));
        var item_level_total_charge = parseFloat((item_1_pc + item_2_pc + item_3_pc).toFixed(2));
        var item_level_total_tax = parseFloat((item_1_tax + item_2_tax + item_3_tax).toFixed(2));
        var order_level_total_charge = parseFloat(parseFloat(form.a_pc.value).toFixed(2));
        var order_charge_cgst_tax = parseFloat(((parseFloat(form.a_pc.value) * (parseFloat((parseFloat(form.a_pc_tax.value) / 2) / 100)))).toFixed(2));
        var order_charge_sgst_tax = parseFloat(((parseFloat(form.a_pc.value) * (parseFloat((parseFloat(form.a_pc_tax.value) / 2) / 100)))).toFixed(2));
        var order_level_total_tax = parseFloat((order_charge_cgst_tax + order_charge_sgst_tax).toFixed(2));
        var total_charge = parseFloat(parseFloat(item_level_total_charge + order_level_total_charge).toFixed(2));
        var total_tax = parseFloat(parseFloat(item_level_total_tax + order_level_total_tax).toFixed(2));
        var order_total = parseFloat(parseFloat(sub_total - parseFloat(form.a_total_discount.value) + total_charge + total_tax).toFixed(2));
        var trigger = {
            "customer": {
                "address": {
                    "city": "Delhi NCR",
                    "is_guest_mode": false,
                    "line_1": "line 1",
                    "line_2": "line 2",
                    "landmark": "landmark",
                    "latitude": 13.05339,
                    "longitude": 80.24940,
                    "sub_locality": "HSR Layout",
                    "pin": "221005",
                    "tag": "Home"
                },
                "email": "testuser@example.com",
                "name": "testuser",
                "phone": "9999999999"
            },
            "order": {
                "details": {
                    "biz_id": parseInt(form.a_biz_id.value),
                    "channel": form.a_name.value.toLowerCase(),
                    "charges": [{
                        "taxes": [{
                                "title": "SGST",
                                "value": order_charge_cgst_tax
                            },
                            {
                                "title": "CGST",
                                "value": order_charge_sgst_tax
                            }
                        ],
                        "title": "Packaging Charge",
                        "value": parseFloat(form.a_pc.value)
                    }],
                    "coupon": "FLAT55",
                    "created": millis,
                    "delivery_datetime": parseInt(millis + 2700000),
                    "discount": parseFloat(form.a_total_discount.value),
                    "total_external_discount": parseFloat(form.a_agg_discount.value),
                    "ext_platforms": [{
                        "id": form.a_agg_id.value,
                        "kind": "food_aggregator",
                        "name": form.a_name.value.toLowerCase(),
                        "delivery_type": form.a_delivery_type.value.toLowerCase(),
                        "extras": {
                            "order_type": "pop",
                            "thirty_minutes_delivery": true,
                            "cash_to_be_collected": order_total
                        },
                        "discounts": [{
                                "is_merchant_discount": true,
                                "rate": 0.0,
                                "title": "Restaurant Promo",
                                "value": parseFloat(merchant_discount),
                                "code": "ZOMATOIPL"
                            },
                            {
                                "is_merchant_discount": false,
                                "rate": 0.0,
                                "title": "Restaurant Promo",
                                "value": parseFloat(form.a_agg_discount.value),
                                "code": "ZOMATOIPL"
                            }
                        ]
                    }],
                    "id": parseInt(form.a_up_id.value),
                    "instructions": form.a_instruction.value,
                    "item_level_total_charges": item_level_total_charge,
                    "item_level_total_taxes": item_level_total_tax,
                    "item_taxes": 0.0,
                    "merchant_ref_id": form.a_agg_id.value,
                    "order_level_total_charges": order_level_total_charge,
                    "order_level_total_taxes": order_level_total_tax,
                    "order_state": "Placed",
                    "order_subtotal": sub_total,
                    "order_total": order_total,
                    "payable_amount": order_total,
                    "time_slot_end": "23:59:00",
                    "time_slot_start": "08:00:00",
                    "order_type": form.a_delivery_type.value.toLowerCase(),
                    "state": "Placed",
                    "taxes": [{

                    }],
                    "total_charges": total_charge,
                    "total_taxes": total_tax
                },
                "items": [{
                        "charges": [{
                            "title": "Packaging Charge",
                            "value": item_1_pc
                        }],
                        "discount": 0.0,
                        "food_type": "1",
                        "id": 46898,
                        "image_landscape_url": null,
                        "image_url": null,
                        "merchant_id": form.a_item_1_id.value,
                        "options_to_add": [{
                                "id": 11262,
                                "merchant_id": form.a_otp_1_id.value,
                                "price": parseFloat(form.a_otp_1_price.value),
                                "title": form.a_otp_1_name.value
                            },
                            {
                                "id": 11263,
                                "merchant_id": form.a_otp_2_id.value,
                                "price": parseFloat(form.a_otp_2_price.value),
                                "title": form.a_otp_2_name.value
                            }
                        ],
                        "options_to_remove": [

                        ],
                        "price": parseFloat(form.a_item_1_id.value),
                        "quantity": parseInt(form.a_item_1_qty.value),
                        "taxes": [{
                                "rate": parseFloat(form.a_item_1_cgst.value),
                                "title": "CGST",
                                "value": parseFloat(item_1_tax / 2)
                            },
                            {
                                "rate": parseFloat(form.a_item_1_sgst.value),
                                "title": "SGST",
                                "value": parseFloat(item_1_tax / 2)
                            },
                            {
                                "rate": (parseFloat(form.a_item_1_pc_tax.value) / 2),
                                "title": "CGST on Packaging Charge",
                                "value": item_1_pc_cgst_tax
                            },
                            {
                                "rate": (parseFloat(form.a_item_1_pc_tax.value) / 2),
                                "title": "SGST on Packaging Charge",
                                "value": item_1_pc_sgst_tax
                            }
                        ],
                        "title": form.a_item_1_name.value,
                        "total": item_1_total,
                        "total_with_tax": item_1_total_with_tax,
                        "unit_weight": null
                    },
                    {
                        "charges": [{
                            "title": "Packaging Charge",
                            "value": item_2_pc
                        }],
                        "discount": 0.0,
                        "food_type": "1",
                        "id": 46898,
                        "image_landscape_url": null,
                        "image_url": null,
                        "merchant_id": form.a_item_2_id.value,
                        "options_to_add": [{
                                "id": 11262,
                                "merchant_id": form.a_otp_3_id.value,
                                "price": parseFloat(form.a_otp_3_price.value),
                                "title": form.a_otp_3_name.value
                            },
                            {
                                "id": 11263,
                                "merchant_id": form.a_otp_4_id.value,
                                "price": parseFloat(form.a_otp_4_price.value),
                                "title": form.a_otp_4_name.value
                            }
                        ],
                        "options_to_remove": [

                        ],
                        "price": parseFloat(form.a_item_2_id.value),
                        "quantity": parseInt(form.a_item_2_qty.value),
                        "taxes": [{
                                "rate": parseFloat(form.a_item_2_cgst.value),
                                "title": "CGST",
                                "value": parseFloat(item_2_tax / 2)
                            },
                            {
                                "rate": parseFloat(form.a_item_2_sgst.value),
                                "title": "SGST",
                                "value": parseFloat(item_2_tax / 2)
                            },
                            {
                                "rate": (parseFloat(form.a_item_2_pc_tax.value) / 2),
                                "title": "CGST on Packaging Charge",
                                "value": item_2_pc_cgst_tax
                            },
                            {
                                "rate": (parseFloat(form.a_item_2_pc_tax.value) / 2),
                                "title": "SGST on Packaging Charge",
                                "value": item_2_pc_sgst_tax
                            }
                        ],
                        "title": form.a_item_2_name.value,
                        "total": item_2_total,
                        "total_with_tax": item_2_total_with_tax,
                        "unit_weight": null
                    },
                    {
                        "charges": [{
                            "title": "Packaging Charge",
                            "value": item_3_pc
                        }],
                        "discount": 0.0,
                        "food_type": "1",
                        "id": 46898,
                        "image_landscape_url": null,
                        "image_url": null,
                        "merchant_id": form.a_item_3_id.value,
                        "options_to_add": [],
                        "options_to_remove": [

                        ],
                        "price": parseFloat(form.a_item_3_id.value),
                        "quantity": parseInt(form.a_item_3_qty.value),
                        "taxes": [{
                                "rate": parseFloat(form.a_item_3_cgst.value),
                                "title": "CGST",
                                "value": parseFloat(item_3_tax / 2)
                            },
                            {
                                "rate": parseFloat(form.a_item_3_sgst.value),
                                "title": "SGST",
                                "value": parseFloat(item_3_tax / 2)
                            },
                            {
                                "rate": (parseFloat(form.a_item_3_pc_tax.value) / 2),
                                "title": "CGST on Packaging Charge",
                                "value": item_3_pc_cgst_tax
                            },
                            {
                                "rate": (parseFloat(form.a_item_3_pc_tax.value) / 2),
                                "title": "SGST on Packaging Charge",
                                "value": item_3_pc_sgst_tax
                            }
                        ],
                        "title": form.a_item_3_name.value,
                        "total": item_3_total,
                        "total_with_tax": item_3_total_with_tax,
                        "unit_weight": null
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